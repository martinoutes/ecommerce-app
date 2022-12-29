import React from "react";
import {Container} from 'react-bootstrap';
import Cart from "../Cart/Cart";


const CartContainer = () => {
    
   
    return(
        <div className="bg-light min-vh-100 py-5">
            <Container>

                <Cart />
            
            </Container>
        </div>
    )

}


export default CartContainer;