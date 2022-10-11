import { zapatillas } from "./zapatillas";
import { remeras } from "./remeras";
import React, {useState , useEffect} from 'react';
import Cart from "../Cart/Carrito";
import { useParams } from 'react-router-dom';

import NavBar from "../navBar";
import { Link } from "react-router-dom";
const Prodc = () =>{
    const [pagProducto, setpagProducto] = useState(0);
    const getProductsByCategory = (categoryId) => {
          const results = zapatillas.filter((zapatillas) => zapatillas.categoria == categoryId);
          return (results)
    }
    const [filtroProducto , setFiltroProducto] = useState([])
    const { categoryId } = useParams();
  

    console.log (categoryId)
    return(
<div className="tmcc">
    <NavBar></NavBar>
    <div className="compras">
        <div>
            <p></p>
        <h3>SNCK</h3>
        <section className="productosDelCarrito" id="tienda">
        {zapatillas.map((producto, i) =>(
            <div key = {i} id="zapatillas">
                    <img src = {producto.imagen}></img>
                    <div className="infoProductos">
                    <div><h3>{producto.nombre}</h3>
                    <p>U$D {producto.precio}</p>
                    </div>
                    <Link to={'/item/'+ producto.id}><button onClick={() => setpagProducto(producto.id)}>Comprar</button></Link>
                    </div>
                    <p></p>
                </div>
        ))
        }
        </section>
        <h3>REMERAS</h3>
        <section className="productosDelCarrito" id="tienda">

        </section>
        </div>
    </div>
</div>



)

}

export default Prodc;
