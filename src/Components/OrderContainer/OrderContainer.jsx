import {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import Order from "../Order/Order";
import { useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import Loader from "../Loader/Loader";

const OrderContainer = () => {

    const [order, setOrder] = useState([]);
    const { orderid } = useParams();
    const [loading, setLoading] = useState(true);


    useEffect(()=> {

        const db = getFirestore();
        const item = doc(db, "orders", orderid);
        
        getDoc(item).then((result) => {
            
            const updatedItem = [...[result.data()]]
            const newItem = {...result.data(), id: orderid};
            updatedItem.splice(result.data(), 1, newItem);

            setOrder(updatedItem)
            setLoading(false)
        })
    }, [orderid])


    return(  
            <div className="bg-light min-vh-100 py-5">
                <Container className="py-5">
                    
                    {
                    loading ? <Loader /> : <Order order={order} />
                    }

                </Container>
            </div>
        )

}

export default OrderContainer;