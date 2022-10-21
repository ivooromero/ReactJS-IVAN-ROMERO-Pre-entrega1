import NavBar from "../navBar";
import React from "react";
import { useContext } from "react";
import busquedaContext from "../context/busquedaContext";
import { Link } from "react-router-dom";
import Header from "../Header";
import { useParams } from "react-router-dom";
const ItemSearch = () =>{
    const hola = useContext(busquedaContext)
    const hola2 = hola.product
    console.log(hola2)
    const { id } = useParams();
    return(
        <>
        <Header></Header>
        <div className="containerPadre">
            <div className="container">
                <h1>Resultados de la busqueda: {id}</h1>
            <section className="itemListContainer">
                {hola2.map((producto, i) =>(
                    <div key = {i} id="zapatillas" className="producto">
                            <img src = {producto.imagen}></img>
                            <div className="infoProductos">
                            <div><h3>{producto.nombre}</h3>
                            <p>U$D {producto.precio}</p>
                            </div>
                            <Link to={'/item/'+ producto.id}><button>Comprar</button></Link>
                            </div>
                        </div>
                ))
                }
            </section>
            </div>
        </div>

        </>
    )
}
export default ItemSearch;