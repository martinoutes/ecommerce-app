import {Row, Col, Card, Button, ListGroup, Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import numberFormat from "../utils/numberFormat";

const Order = ({order}) => {

    return(
        <Row className="justify-content-center">
                
            
            <Col xs={12} md={10} lg={6}>

            <Card className="border-0 p-2 shadow-sm mx-auto">
            <Card.Body>

            <Card.Text className="small pb-3 border-bottom fw-bold"> Orden <span className='text-primary'> #{order[0].id}</span></Card.Text>


            <div className="my-3 p-4 bg-light rounded">
                <Card.Text className="mb-0"><span className='fw-bold'>Usuario: </span>{order[0].user.name + ' ' + order[0].user.lastname}</Card.Text>
                <Card.Text className="mt-1 h5 fw-bold"><span className='text-dark'>Total Compra:</span> ${ numberFormat(order[0].totalCompra)}</Card.Text>
            </div>


            <ListGroup as="ol">
            
            
            { 

            order[0].items.map((producto) => {
            
            return(
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start p-4" key={producto.id}>
                    
                    <Row className="align-items-center">
                    
                    <Col xs={4} md={2} lg={2}>
                    <Link to={`/`}><img alt="" src={`/${producto.img}`} width="100%"/></Link>
                    </Col>
                    
                    <Col>
                        
                        <div className="mb-0">
                            <h5 className="fw-bold mb-0">{producto.name}</h5>
                            <p className="mb-0 text-secondary">${numberFormat(producto.price)} <span className="small">x unidad</span></p>
                        
                            <Badge className="mt-3 border" bg="light" text="dark">Unidades: {producto.cantidad}</Badge>
                            
                        </div>

                    </Col>

                    </Row>


                    
                </ListGroup.Item>
                )
            })
            
           
            
            }

            </ListGroup>

            
            
            </Card.Body>
            </Card>
            
            <Card.Text className="small mt-2 text-center">
                <Link to={'/'}><Button variant="link">Ir a Inicio</Button></Link>
            </Card.Text>

            </Col>
     
        </Row>


    )

}

export default Order;