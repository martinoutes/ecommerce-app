import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {categories} from './Components/Categorias/Categorias';
import CartContainer from './Components/CartContainer/CartContainer';
import CheckoutContainer from './Components/CheckoutContainer/CheckoutContainer';
import OrderContainer from './Components/OrderContainer/OrderContainer';
import Footer from './Components/Footer/Footer';


function App() {

  return (

    <BrowserRouter>
      <NavBar categories={categories}/>

      <Routes className='bg-light'>
        <Route exact path="/" element={<ItemListContainer />}/>
        <Route exact path="/category/:categoryid" element={<ItemListContainer />}/>
        <Route exact path="/item/:productid" element={<ItemDetailContainer />}/>
        <Route exact path="/cart" element={<CartContainer />}/>
        <Route exact path="/checkout" element={<CheckoutContainer />}/>
        <Route exact path="/order/:orderid" element={<OrderContainer />}/>
      </Routes>
      
    <Footer/>

    </BrowserRouter>
    
  );
}

export default App;
 