import {Card, Button, Stack} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Check} from 'react-feather';
import './CheckoutSuccess.css';

const CheckoutSuccess = ({id}) => {

return(
    
    <div className='text-center align-items-center mt-5'>
        

        
        <Check size={60} className='text-success icon-circle p-3'/>
            
        
        <div className='my-5'>
            <Card.Text className="fw-bold h2">¡Felicitaciones!</Card.Text>
            <Card.Text className="small text-secondary">Tu orden fue creada con el id de compra: <br></br><span className='fw-bold text-dark'>{id}</span></Card.Text>
        </div>

        <div className="pt-4 border-top">
            
        <Stack gap={2}>
            <Link to={`/order/${id}`}><Button variant="outline-primary w-100">Ver orden</Button></Link>
            <Link to={'/'}><Button variant="primary w-100">Volver a Inicio</Button></Link>                
        </Stack>
            
                           
        </div>
        
    </div>    
  
)

}

export default CheckoutSuccess;