import React, {useState} from 'react';
import { zapatillas } from './Products/zapatillas';
import { remeras } from './Products/remeras';
import CartWidget from './Cart/CartWidget';
import { Link } from 'react-router-dom';
import { searchProduct } from './Utils/functions';
import { useContext } from 'react';
import busquedaContext from './context/busquedaContext';
const NavBar = () =>{
    /*const [busqueda , setBusqueda] = useState("")
    const product = searchProduct(busqueda)
    const handleChange =(lec) =>{
        setBusqueda(lec.target.value)
    }*/

    const {busqueda , product , handleChange} = useContext(busquedaContext)
        return(
            
<>
    <article className="search">
            <ul className="tagsRopa">
                <li>
                    <Link  to={"/category/zapatillas"}><a href="#zapatillas">Zapatillas</a></Link>
                </li>
                <li>
                    <Link to={"/category/remeras"}><a href="#remeras">Remeras</a></Link>
                    
                </li>
                <li>
                    <Link to={"/category/buzos"}><a href="#buzos">Buzos</a></Link>
                    
                </li>
            </ul>
            <div className='busqueda'>
            <input type="text" placeholder="Search.." className="busqueda" value={busqueda} onChange={handleChange}></input>
            <Link to={"/itemSearch/" + busqueda}><button type="submit"  className='buscarBoton'>Buscar</button></Link>
            </div>
            <CartWidget></CartWidget>
        </article>
</>        
)
}

export default NavBar