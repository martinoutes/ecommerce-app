import React from "react";
import Badge from 'react-bootstrap/Badge';
import './cartNotification.css';

const CartNotification = ({items}) => {
    return(
        <Badge className="cartNotification shadow-sm" bg="danger">{items}</Badge>
    )
}

export default CartNotification;