import React from "react";
import {Container, Row} from 'react-bootstrap';
import { Productos } from '../Productos/Productos'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = () => {

    const { productid } = useParams();
    const [item, setItem] = useState(productid);
    
    
    
    useEffect(()=>{
            seleccionarProducto.then((response)=>{
                setItem(response)
            })
        }, [productid])
    
    
    const seleccionarProducto = new Promise ((resolve, reject) => {

        setTimeout(()=>{
            const nuevoProducto = Productos.filter((producto) => producto.id == productid);
            resolve(nuevoProducto)
        });

    })

    
    
    return(
        <div className="bg-light vh-100">
            <Container>

                <Row className="justify-content-left py-5 g-4"  xs={1} md={2}>
                {
                        item.map((item) => {
                            return <ItemDetail item={item} key={item.id}/>
                        })
                    }
                    
                </Row>
            
            </Container>
        </div>
    )
    

}



export default ItemDetailContainer;