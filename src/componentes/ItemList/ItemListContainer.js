import { getProductsByCategory } from "../Utils/functions"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import Header from "../Header";
import "./itemListContainer.css"
import NavBar from "../navBar";
const ItemListContainer = () => {
    const { id } = useParams();
    const getProduct = getProductsByCategory(id)
    return(
        <>
        <Header></Header>
        <NavBar></NavBar>
        <article>
            <h2>Se ha movido a la categoria : {id}</h2>
        </article>
        <section className="itemListContainer">
            {getProduct.map((producto, i) =>(
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

        </>
        
        
    )
}

export default ItemListContainer