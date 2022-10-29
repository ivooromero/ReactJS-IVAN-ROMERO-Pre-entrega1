import NavBar from "../navBar";
import React, { useState } from "react";
import { useContext , useEffect } from "react";
import busquedaContext from "../context/busquedaContext";
import { Link } from "react-router-dom";
import Header from "../Header";
import { useParams } from "react-router-dom";
import { searchProduct } from "../Utils/functions";
const ItemSearch = () =>{
    const {id} = useParams()
    const [product , setProduct] = useState([])
    useEffect(() => {
        searchProduct(id)
        .then((data) => setProduct(data))
    }, []);
    console.log(product)
    console.log(id)
    return(
        <>
        <Header></Header>
        <div className="containerPadre">
            <div className="container">
                <h1>Resultados de la busqueda: {id}</h1>
            <section className="itemListContainer">
            {product.map((producto, i) =>(
                <div key = {i} className="producto">
                        <img src = {producto.imagen}></img>
                        <div className="infoProductos">
                        <div><h3>{producto.nombre}</h3>
                        <p>U$D {producto.precio}</p>
                        </div>
                        <Link to={'/item/'+ producto.idP}><button>Comprar</button></Link>
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