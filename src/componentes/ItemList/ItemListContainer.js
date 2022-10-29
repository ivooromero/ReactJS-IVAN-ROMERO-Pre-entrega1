import { getProductsByCategory } from "../Utils/functions"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import Header from "../Header";
import "./itemListContainer.css"
import NavBar from "../navBar";
import { useState, useEffect } from "react";
const ItemListContainer = () => {
    const { id } = useParams();
    const [getProduct , setGetProduct] = useState([])
    useEffect(() => {
        getProductsByCategory(id)
        .then((data) => setGetProduct(data))
        .catch((error) => setGetProduct(error))
        console.log(getProduct)
    }, []);
    console.log(getProduct.categoria)
    return(
        <>
        <Header></Header>
        <NavBar></NavBar>
        <article>
            <h2>Se ha movido a la categoria : {id}</h2>
        </article>
        <section className="itemListContainer">
            {getProduct.map((producto, i) =>(
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

        </>
        
        
    )
}

export default ItemListContainer