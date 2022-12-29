import React from "react";
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import {Container} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemNotFound from "../ItemNotFound/ItemNotFound";
import Loader from "../Loader/Loader";


const ItemDetailContainer = () => {
    
    const [item, setItem] = useState([]);
    const { productid } = useParams();
    const [loading, setLoading] = useState(true);
    const [existsInDb, setExistsInDb] = useState(false);


    useEffect(()=> {

        const db = getFirestore();
        const item = doc(db, "item", productid);
        
        getDoc(item).then((result) => {

            if(result.exists()){
                const updatedItem = [...[result.data()]]
                const newItem = {...result.data(), id:productid};
                updatedItem.splice(result.data(), 1, newItem);
                
                setExistsInDb(true)
                setItem(updatedItem)
                setLoading(false)
            } else {
                setExistsInDb(false)
                setLoading(false)
            }
                
        })

        
    }, [productid])
    
    
    return(
        <div className="bg-light min-vh-100 py-5">
            <Container className="py-5">

            {   
               loading ? 
                <Loader /> :
                    existsInDb ?
                        <ItemDetail item={item} existsInDb={existsInDb}  /> :
                            <ItemNotFound/>
            }
                
            </Container>
        </div>
    )
    

}



export default ItemDetailContainer;