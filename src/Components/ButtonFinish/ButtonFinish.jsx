import React from 'react';
import {Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

const ButtonFinish = () => {
  
  
  return (
    <>
    <Link to={`/cart`}>
      <Button  className="space" variant="warning">Finalizar Compra</Button>
    </Link>
    <Link to={`/inicio`}>
      <Button  className="space" variant="success">Agregar mas productos</Button>
    </Link>
    </>
  )
}

export default ButtonFinish