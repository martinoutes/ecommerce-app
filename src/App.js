import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {categories} from './Components/Categorias/Categorias'

function App() {

  return (
    <BrowserRouter>
      <NavBar categories={categories}/>

      <Routes>
        <Route exact path="/" element={<ItemListContainer />}/>
        <Route exact path="/category/:id" element={<ItemListContainer />}/>
        <Route exact path="/item/:productid" element={<ItemDetailContainer />}/>
      </Routes>


    </BrowserRouter>
  );
}

export default App;
 