import './App.css';
import Header from './componentes/Header';
import { BusquedaProvider } from './componentes/context/busquedaContext';
import Home from './componentes/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './componentes/Cart/Carrito';
import ItemSearch from './componentes/itemSearch/itemSearch';
import ItemDetailContainer from './componentes/ItemDetail/ItemDetailContainer';
import ItemListContainer from './componentes/ItemList/ItemListContainer';
import CartProvider from './componentes/context/CartContext';
function App() {
  
    return (
    <body>
      <BusquedaProvider>
      <CartProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home><Header></Header></Home>}></Route>
          <Route path='/category/:id' element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path='/item/:id'element={<ItemDetailContainer></ItemDetailContainer>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/itemSearch/:id' element={<ItemSearch></ItemSearch>}></Route>
        </Routes>
        </BrowserRouter>
      </CartProvider>
      </BusquedaProvider>

    </body>
  );
}

export default App;
