import { zapatillas } from "./zapatillas";
import { remeras } from "./remeras";
import React, {useState} from 'react';
import Cart from "../Cart/Carrito";
import NavBar from "../navBar";
import { Link } from "react-router-dom";
const Prodc = () =>{

    const [pagProducto, setpagProducto] = useState(0);

    return(

<div className="tmcc">
    <NavBar></NavBar>
    <div className="compras">
        <div>
        <h3>SNCK</h3>
        <section className="productosDelCarrito" id="tienda">
        {zapatillas.map((producto, i) =>(
            <div key = {i} id="zapatillas">
                    <img src = {producto.imagen}></img>
                    <div className="infoProductos">
                    <div><h3>{producto.nombre}</h3>
                    <p>U$D {producto.precio}</p>
                    </div>
                    <Link to={'/item/:'+producto.id}><button onClick={() => console.log("producto agregado al carrito "+ (producto.nombre))}>Comprar</button></Link>
                    </div>
                    <p></p>
                </div>
        ))
        }
        </section>
        <h3>REMERAS</h3>
        <section className="productosDelCarrito" id="tienda">

        {remeras.map((producto, i) =>(

            <div key = {i} id="remeras">
                    <img src = {producto.imagen}></img>
                    <div className="infoProductos">
                    <div><h3>{producto.nombre}</h3>
                    <p>U$D {producto.precio}</p>
                    </div>
                    <button onClick={() =>console.log("producto agregado al carrito "+ (producto.nombre))}>Comprar</button>
                    </div>
                </div>
                
        ))}
        </section>
        </div>
            <Cart></Cart>
    </div>
</div>



)

}


export default Prodc;
