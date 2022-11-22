import React from "react";
import Button from 'react-bootstrap/Button';
import Cart from "../Icons/Cart";
import CartNotification from "../CartNotification/CartNotification";
import './cartWidget.css';

const CartWidget = () => {
    return(
        <Button href="#" variant="outline-dark" className="cartWidgetContainer mt-4 mt-md-4 mt-lg-0">
            <CartNotification items="4" />
            <Cart/>
        </Button>

    )
}

export default CartWidget;