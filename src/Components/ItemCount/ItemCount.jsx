import { useState } from "react";
import {Button, Row, Col, Stack} from 'react-bootstrap';
import {Plus, Minus} from 'react-feather'

const ItemCount =({onAdd, stock})=>{
    
    const [contadorCarrito, setcontadorCarrito] = useState(1);

    const handlerAddCount = () =>{
        if(contadorCarrito < stock){
            setcontadorCarrito(contadorCarrito + 1)
        }
        
    }

    const handlerSubtractionCount = () =>{
        if(contadorCarrito > 0){
            setcontadorCarrito(contadorCarrito - 1)
            
        }
    }

    

return(
<Stack gap={2}>
    
    <Button variant="primary" onClick={() => { onAdd(contadorCarrito); }} disabled={contadorCarrito === 0 ? true : false}>Agregar al carrito</Button>
                        
    <Row className="justify-content-center">
        <Col>
            
            <div className="text-center d-flex mx-auto border rounded p-1 align-items-center justify-content-center">
                <Button variant="outline-primary col-2" size="sm" onClick={()=>handlerSubtractionCount()}><Minus size={14} /></Button>
                    <div className="col-8 small"><b>{contadorCarrito}</b></div>
                <Button variant="outline-primary col-2" size="sm" onClick={()=>handlerAddCount()}><Plus size={14} /></Button>
            </div>
        
        </Col>  
    </Row>


</Stack>
    
)

}

export default ItemCount;