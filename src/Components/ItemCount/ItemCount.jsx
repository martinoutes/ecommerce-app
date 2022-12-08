import React, { useState } from "react";
import {Card, Button, Row, Col} from 'react-bootstrap';

const ItemCount = () => {
    
    const [contadorCarrito, setcontadorCarrito] = useState(1);
    let stock = 7;

    const sumar = () => {
        if(stock > contadorCarrito){
            setcontadorCarrito(contadorCarrito + 1);
        }
    }

    const restar = () => {
        if(contadorCarrito > 1){
            setcontadorCarrito(contadorCarrito - 1);
        }
    }

return(
<>
<Row md={6} className="justify-content-center">
    <Col>
    <Card className="border-0 shadow-sm p-2 mx-auto">
      <Card.Body>
        <Card.Title>Producto</Card.Title>
            
            <Card.Text className="mb-5">
            Stock de {stock} unidades.
            </Card.Text>

            <div className="mt-3 text-center d-flex mx-auto border rounded p-1 align-items-center justify-content-center">
                <Button variant="outline-primary col-2" size="sm" onClick={restar}><b>-</b></Button>
                    <div className="col-8 small"><b>{contadorCarrito}</b></div>
                <Button variant="outline-primary col-2" size="sm" onClick={sumar}><b>+</b></Button>
            </div>
            
            
            <Button variant="primary mt-3" size="md" className="w-100">Agregar al carrito</Button>

      </Card.Body>
    </Card>
    </Col>  
</Row>
    
</>
)

}

export default ItemCount;