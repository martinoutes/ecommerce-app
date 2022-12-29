import React from "react";
import {Card, Button, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import numberFormat from "../utils/numberFormat";

const Item = ({producto}) => {

return (
<Col xs={6} md={6} lg={4} xl={3}>
    <Card className="border-0 shadow-sm p-0 mx-auto hover-shadow">
    
    <Link to={`/item/${producto.id}`}>
        <Card.Img variant="top border-bottom" src={`/${producto.img}`}/>
    </Link>
    
    <Card.Body>
        <div className="mt-2 mb-4">
            <Card.Text className="h4">${numberFormat(producto.price)}</Card.Text>
            <Card.Title className="mb-1 text-secondary h6 text-truncate">{producto.name}</Card.Title>
        </div>
        
        <Link to={`/item/${producto.id}`}><Button variant="primary" size="sm" className="w-100">Ver detalles</Button></Link>
    </Card.Body>
     
    </Card>
</Col>
)

}


export default Item;