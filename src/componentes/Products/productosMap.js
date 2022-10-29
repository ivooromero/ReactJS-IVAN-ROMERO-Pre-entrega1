import { zapatillas } from "./zapatillas";
import { remeras } from "./remeras";
import React, {useState , useEffect} from 'react';
import Cart from "../Cart/Carrito";
import { useParams } from 'react-router-dom';
import NavBar from "../navBar";
import { Link } from "react-router-dom";
import { getAllProducts } from "../Utils/functions";


const Prodc = () =>{

const [products , setProducts] = useState([])

    useEffect(() => {
      getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.warn(error))
    }, []);
    console.log(products)

    const [pagProducto, setpagProducto] = useState(0);

    const productoss = new Promise(function(resolve, reject){

    })
    return(
<div className="tmcc">
    <NavBar></NavBar>
    <div className="compras">
        <div>
        <section className="productosDelCarrito" id="tienda">
        {products.map((producto, i) =>(
            <div key = {i} id="zapatillas" className="productoMap">
                    <img src = {producto.imagen}></img>
                    <div className="infoProductos">
                    <div><h3>{producto.nombre}</h3>
                    <p>U$D {producto.precio}</p>
                    </div>
                    <Link to={'/item/'+ producto.idP}><button onClick={() => setpagProducto(producto.id)}>Comprar</button></Link>
                    </div>
                    <p></p>
                </div>
        ))
        }
        </section>
        </div>
    </div>
</div>



)

}

export default Prodc;
