import React from "react";
import {Container, Row} from 'react-bootstrap';
import Item from "../Item/Item";
import {Productos} from '../Productos/Productos'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const ItemListContainer = () => {
    
    const [item, setItem] = useState(Productos);
    const {id} = useParams();

    
    useEffect(()=>{
        filtrarProductos.then((response)=>{
            if (response?.length > 0) {
                setItem(response)
            }
        })
    }, [id])

    const filtrarProductos = new Promise ((resolve, reject) => {

        setTimeout(()=>{
            const nuevosProductos = Productos.filter((producto) => producto.categoria == id);
            resolve(nuevosProductos);
        });

    })

    
    return(
        <div className="bg-light vh-100">
            <Container>

                <Row className="justify-content-left py-5 g-4"  xs={1} md={2}>
                    {
                        item.map((producto) => {
                            return <Item producto={producto} key={producto.id}/>
                        })
                    }
                </Row>
            
            </Container>
        </div>
    )

}


export default ItemListContainer;