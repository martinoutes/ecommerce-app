import React from "react";
import {Col, Card} from 'react-bootstrap';

const ItemDetail = ({item}) => {

    return(

        <Col xs={6} md={6} lg={3}>
            <Card className="border-0 shadow-sm p-0 mx-auto hover-shadow">

            <Card.Img variant="top border-bottom" src={item[0].img} />
            
            <Card.Body>
            <div className="mt-2">
                <Card.Text className="h4">${item[0].precio}</Card.Text>
                <Card.Title className="mb-0 text-secondary h6">{item[0].nombre}</Card.Title>
            </div>

            </Card.Body>

            </Card>
        </Col>

    )
    

}



export default ItemDetail;