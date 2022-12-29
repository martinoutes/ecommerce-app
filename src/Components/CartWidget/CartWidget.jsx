import React from "react";
import { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Cart from "../Icons/Cart";
import CartNotification from "../CartNotification/CartNotification";
import { CartContext } from "../../Context/CartContext/CartContext";
import { Link } from "react-router-dom";
import './cartWidget.css';


const CartWidget = () => {

    const {count} = useContext(CartContext);

    return(
        <Link to={'/cart'}>
            <Button variant="outline-dark" className="cartWidgetContainer mt-4 mt-md-4 mt-lg-0">
                
                {count > 0 && <CartNotification items={count} />}
                <Cart/>
            
            </Button>
        </Link>
    )
}

export default CartWidget;