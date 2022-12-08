import React from "react";
import {Col, Card} from 'react-bootstrap';

const ItemDetail = ({item}) => {


    return(

        <Col xs={6} md={6} lg={3}>
            <Card className="border-0 shadow-sm p-0 mx-auto hover-shadow">

            <Card.Img variant="top border-bottom" src={item.img} />
            
            <Card.Body>
            <div className="mt-2 mb-4">
                <Card.Text className="h4">${item.precio}</Card.Text>
                <Card.Title className="mb-1 text-secondary h6">{item.nombre}</Card.Title>
            </div>

            </Card.Body>

            </Card>
        </Col>

    )
    

}



export default ItemDetail;