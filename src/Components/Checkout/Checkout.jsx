import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";
import {getFirestore, addDoc, collection} from 'firebase/firestore';
import { Link, Navigate } from "react-router-dom";
import {Button, Col, Form, Row, Card, Stack, Table } from 'react-bootstrap';
import CheckoutSuccess from "../CheckoutSuccess/CheckoutSuccess";
import numberFormat from "../utils/numberFormat";
import { ArrowLeft, User, List } from 'react-feather';

const Checkout = () => {
    
    const {cartList, clearCart} = useContext(CartContext);
    const [orderList] = useState([...cartList]);
    const [totalCompra, setTotalCompra] = useState(0);
    const [ordenEnviada, setOrdenEnviada] = useState(false);
    const [nroOrden, setNroOrden] = useState();

    //Const formulario
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    //const [formIsValid, setFormIsValid] = useState(false);
    const [sending, setSending] = useState(false);

    useEffect(() => {
      
        if(orderList.length > 0){
            const itemsValue = orderList.map((item) => item.price * item.cantidad)
            const total = itemsValue.reduce((totalCompra, valorItem) => totalCompra + valorItem)
            setTotalCompra(total);
        }
    
    }, [orderList]);

    
    if(orderList.length === 0){
        return <Navigate to="/" />
    }



    const setField = (field, value) => {
        
        setForm({
          ...form,
          [field]: value
        })

        // Check and see if errors exist, and remove them from the error object:
        if ( !!errors[field] ) setErrors({
        ...errors,
        [field]: null
      })
      }



    const findFormErrors = () => {
        const { name, lastname, email, direccion } = form
        const newErrors = {}
        
        // name errors
        if ( !name || name === '' ) newErrors.name = 'Debes escribir tu nombre.'

        // name errors
        if ( !lastname || lastname === '' ) newErrors.lastname = 'Debes escribir tu apellido.'

        // name errors
        if ( !email || email === '' ) newErrors.email = 'Tu correo electrónico es obligatorio.'

        // name errors
        if ( !direccion || direccion === '' ) newErrors.direccion = 'Debes escribir tu dirección.'
        
        return newErrors
    }


    const handleSubmit = e => {
        e.preventDefault()

        const newErrors = findFormErrors()
        
        if ( Object.keys(newErrors).length > 0 ) {
            setErrors(newErrors)
        } else {
            setSending(true)
            newOrder();
        }
    }
    


    //Enviar orden a Firebase.
    const newOrder = () => {

        const order = {
                user: { name: form.name, lastname: form.lastname, email: form.email, direccion: form.direccion },
                items: cartList,
                totalCompra: totalCompra
            }
            
        const db = getFirestore();
        const orders = collection(db, "orders")
        
        addDoc(orders, order).then(({ id }) => {
            
            setSending(false)
            setNroOrden(id)
            setOrdenEnviada(true)
            clearCart();
        
        })
    
    }
    

  return (

    
    <Row className="justify-content-center align-items-middle g-4">

         {

            cartList.length > 0 &&

            <Col xs={12} md={12} lg={7}>

        
            <Card className="border-0 p-2 shadow-sm mx-auto">
                <Card.Body>

                <Card.Text className="fw-bold pb-3 border-bottom"><List size={20} className="me-2"/> Resúmen de tu pedido</Card.Text>
                
                <Table striped size="sm" className="small">
                    <thead>
                        <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    {
                        cartList.map((producto) => {

                            return(
                                <tr>
                                    <td>{producto.name}</td>
                                    <td>${numberFormat(producto.price)}</td>
                                    <td>{producto.cantidad}</td>
                                </tr>
                            )

                        })
                    }
                    
                        
                        
                    </tbody>
                    </Table>
                
                </Card.Body>
            </Card>

            <Stack gap={2}>
                <Link to={'/cart'}><Button variant="link" className="text-secondary w-100 mt-2" size="sm"><ArrowLeft size={16} className="me-2"/> Volver al carrito</Button></Link>
            </Stack>

            </Col>

         }       
        

        <Col xs={12} md={12} lg={5}>
            
        <Card className="border-0 p-2 shadow-sm mx-auto">
        
            <Card.Body>

                { ordenEnviada ?
                    
                    <CheckoutSuccess id={nroOrden}/>
                    
                :
                    
                    <Form noValidate onSubmit={handleSubmit}>

                        <Card.Text className="fw-bold pb-3 border-bottom"><User size={20} className="me-2"/> Tus datos</Card.Text>
                        
                        <div className="my-5">
                        
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="ordenNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" value={form.name} onChange={e => setField('name', e.target.value)} required isInvalid={!!errors.name}/>
                            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="ordenApellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Apellido" value={form.lastname} onChange={e => setField('lastname', e.target.value)} required isInvalid={!!errors.lastname}/>
                            <Form.Control.Feedback type="invalid">{errors.lastname}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="ordenEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Correo electrónico" value={form.email} onChange={e => setField('email', e.target.value)} required isInvalid={!!errors.email}/>
                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            </Form.Group>

                        <Form.Group className="mb-4" controlId="ordenDireccion">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control placeholder="Dirección" value={form.direccion} onChange={e => setField('direccion', e.target.value)} required isInvalid={!!errors.direccion}/>
                            <Form.Control.Feedback type="invalid">{errors.direccion}</Form.Control.Feedback>
                        </Form.Group>
                        
                        </div>

                        
                        <div className="mb-4 pt-4 border-top">
                            <Card.Text className="h4 mb-0">Total</Card.Text>
                            <Card.Text className="fw-light fs-1">${numberFormat(totalCompra)}</Card.Text>
                        </div>

                        
                        <Card.Text className="pt-4 border-top">
                            {sending ? 
                                <Button variant="primary" type="submit" className="w-100" disabled>Enviando...</Button>
                                :
                                <Button variant="primary" type="submit" className="w-100">Enviar pedido</Button>
                            }       
                        </Card.Text>
                            
                            
                    </Form>
                }
                
                

            </Card.Body>
            
        </Card>

                
        </Col>
                    
                
                
        

    </Row>
  );
}

export default Checkout;