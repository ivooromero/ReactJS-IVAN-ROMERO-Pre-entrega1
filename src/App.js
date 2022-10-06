import './App.css';
import Header from './componentes/Header';

import Home from './componentes/Home';
import Prodc from './componentes/Products/productosMap';
import NavBar from './componentes/navBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './componentes/Cart/Carrito';
import ItemDetailContainer from './componentes/ItemDetail/ItemDetailContainer';
import ItemListContainer from './componentes/ItemList/ItemListContainer';
function App() {

  return (
    <body>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home><Header></Header></Home>}></Route>
        <Route path='/category/:id' element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path='/item/:id'element={<ItemDetailContainer></ItemDetailContainer>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
