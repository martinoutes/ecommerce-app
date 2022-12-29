import React from "react";
import { Row, Col, Card} from "react-bootstrap";
import {Frown} from  'react-feather';

const ItemNotFound = () => {

    return(
        <Row className="justify-content-left align-items-middle g-4">
            <Col>
                <Card className="border-0 p-2 shadow-sm mx-auto">
                    <Card.Body>
                        <Card.Text className="mb-0 h6 py-3 text-center fw-bold"><Frown size={20} className="me-2" />Oops, este producto no existe.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )

}

export default ItemNotFound;