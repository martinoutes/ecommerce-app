import React from "react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, ListGroup, Badge, Stack, Button } from "react-bootstrap";
import { CartContext } from "../../Context/CartContext/CartContext";
import numberFormat from "../utils/numberFormat";
import { Trash, ArrowRight } from 'react-feather';

const Cart = () => {

    const {cartList, removeItem, clearCart} = useContext(CartContext);
    const [totalCompra, setTotalCompra] = useState(0);
    
    
    useEffect(() => {
      
    if(cartList.length > 0){
        
        const itemsValue = cartList.map((item) => item.price * item.cantidad)
        const total = itemsValue.reduce((totalCompra, valorItem) => totalCompra + valorItem)
        setTotalCompra(total);

    } else {
        setTotalCompra(0);
    }

    }, [cartList]);


    
    return(


        <Row className="justify-content-left align-items-middle g-4">
                
            
            <Col xs={12} md={12} lg={8}>

            <Card className="border-0 p-2 shadow-sm mx-auto">
            <Card.Body>

            <ListGroup as="ol">
            { 

            cartList.length > 0 ?

            cartList.map((producto) => {
            
            return(
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start p-4" key={producto.id}>
                    
                    <Row className="align-items-center">
                    
                    <Col xs={4} md={2} lg={2}>
                    <Link to={`/item/${producto.id}`}><img alt="" src={producto.img} width="100%"/></Link>
                    </Col>
                    
                    <Col>
                        
                        <div className="mb-0">
                            <h5 className="fw-bold mb-0">{producto.name}</h5>
                            <p className="mb-0 text-secondary">${numberFormat(producto.price)} <span className="small">x unidad</span></p>
                        
                            <Badge className="mt-3 border" bg="light" text="dark">Unidades: {producto.cantidad}</Badge>
                            
                        </div>

                    </Col>

                    </Row>


                    <Button size="sm" variant="danger" onClick={() => removeItem(producto.id)}><Trash size={14}/></Button>
                    
                    
                </ListGroup.Item>
                )
            })
            
            : <ListGroup.Item as="li" className="justify-content-between align-items-center py-3 text-center fw-bold">Tu carrito está vacío.</ListGroup.Item>
            
            }

            </ListGroup>
           
            </Card.Body>
            </Card>
            
            </Col>

            {
                cartList.length > 0 &&
                
                <Col xs={12} md={12} lg={4}>
                    
                <Card className="border-0 p-2 shadow-sm mx-auto">
                    
                    <Card.Body>
                    
                        <div className="mb-4">
                            <Card.Text className="h4 mb-0">Total</Card.Text>
                            <Card.Text className="fw-light fs-1">${ numberFormat(totalCompra) }</Card.Text>
                        </div>

                       
                        <Card.Text className="small pt-4 border-top text-center">
                            <Link to={'/checkout'}><Button variant="primary" className="w-100">Ir a pagar <ArrowRight size={16} className="ms-2"/></Button></Link>
                        </Card.Text>

                    </Card.Body>
                </Card>

                
                <Stack gap={2}>
                    <Button variant="link" className="text-danger mt-2" size="sm" onClick={()=>clearCart()}><Trash color="red" size={16} className="me-2"/> Vaciar carrito</Button>
                </Stack>

                </Col>
                    
                
                
            }
            
                
            </Row>
        
    )

}


export default Cart; 