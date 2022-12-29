import React from "react";
import { useContext, useState } from "react";
import {Row, Col, Card, Button, Stack} from 'react-bootstrap';
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext/CartContext";
import { Link } from "react-router-dom";
import numberFormat from "../utils/numberFormat";
import { ShoppingCart, Trash } from 'react-feather';



const ItemDetail = ({item}) => {

    const {cartList, addToCart, removeItem, isInCart} =  useContext(CartContext);
    const [isAdded, setIsAdded] = useState(false);
    
    let stock = item[0].stock;

    const onAdd = (count) => {
        addToCart(item[0],count)
        setIsAdded(true);
    }

    const eliminarDelCarrito = () => {
        removeItem(item[0].id)
        setIsAdded(false);
    }
    

    return(
           
            <Row className="justify-content-left align-items-top g-4">
                <Col xs={12} md={12} lg={8}>
                    
                    <Card className="border-0 shadow-sm mx-auto">
                        <Card.Img src={`/${item[0].img}`} />
                    </Card>
                
                </Col>

                <Col xs={12} md={12} lg={4}>
                    
                <Card className="border-0 p-2 shadow-sm mx-auto">
                    
                    <Card.Body>

                    <Card.Text className="small pb-3 border-bottom"><b>{stock}</b> unidades disponibles</Card.Text>


                        <div className="my-5">
                            <Card.Text className="h4 mb-0">{item[0].name}</Card.Text>
                            <Card.Text className="fw-light fs-1">${numberFormat(item[0].price)}</Card.Text>
                            <Card.Text className="mt-4">{item[0].description}</Card.Text>
                        </div>

                        
                        <div className="pt-4 border-top">
                        
                        {
                        isAdded ? 
                        <Stack gap={2}>
                            
                            <Link to={'/'}><Button variant="outline-secondary w-100">Agregar más productos</Button></Link>
                            <Link to={'/cart'}><Button variant="primary w-100"><ShoppingCart size={16} className="me-2"/>Ir al carrito</Button></Link>
                                                
                        </Stack>
                        :
                        <ItemCount stock={stock} onAdd={onAdd} cart={cartList}/>
                        
                        }

                        </div>
                        

                    </Card.Body>
                </Card>

                        
                {
                    isInCart(item[0].id) &&
                    <div className="mt-2 text-center">
                    
                    <Button variant="link text-danger" size="sm" onClick={() => eliminarDelCarrito()}><Trash size={14} className="me-2"/>Eliminar este producto del carrito</Button>
                    
                    </div> 
                }
                </Col>

                
                
            </Row>
        
    )
    

}



export default ItemDetail;
