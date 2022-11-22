import React from "react";
import {Container, Row, Col} from 'react-bootstrap';

const ItemListContainer = (props) => {

    return(
        <Container fluid className="bg-light vh-100">
            <Row className="text-center align-items-center justify-content-center h-75">
                <Col xs={12} md={8}>
                    <h1>¡Bienvenido <b>{props.greeting}!</b></h1>
                </Col>
            </Row>
        </Container>
    )

}


export default ItemListContainer;