import React from "react";
import {Container, Row} from 'react-bootstrap';
import Item from "../Item/Item";

import {getDocs, collection, getFirestore, query, where, orderBy} from 'firebase/firestore';

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";


const ItemListContainer = () => {
    
    const [item, setItem] = useState([]);
    const {categoryid} = useParams();
    const [loading, setLoading] = useState(true);


    
    useEffect(()=> {

        setLoading(true)
        const db = getFirestore();
        
        if(categoryid){
            
            const itemCollection = query(collection(db, "item"), where("category", "==", categoryid));

            getDocs(itemCollection).then((result) => {

                setItem(result.docs.map((doc)=>({
                    id:doc.id,...doc.data()
                })))
                setLoading(false)
                
                
            })

        } else {


            const itemCollection = query(collection(db, "item"), orderBy("category", "asc"));

            getDocs(itemCollection).then((result) => {
                
                setItem(result.docs.map((doc)=>({
                    id:doc.id,...doc.data()
                })))
                
                setLoading(false)
            })
        }
        

    }, [categoryid])

    
    return(
        <div className="bg-light min-vh-100 py-5">
            <Container>

                    
               
                <Row className="justify-content-left g-4">
                    {
                    
                    loading ? 
                        <Loader /> : 
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