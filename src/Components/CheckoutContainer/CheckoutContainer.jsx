import Checkout from "../Checkout/Checkout";
import { Container } from "react-bootstrap";

const CheckoutContainer = () => {

    return(
        <div className="bg-light min-vh-100 py-5">
            <Container>

                <Checkout/>
            
            </Container>
        </div>
    )

}

export default CheckoutContainer;