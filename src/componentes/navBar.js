import React from 'react';
import CartWidget from './Cart/CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import busquedaContext from './context/busquedaContext';
const NavBar = () =>{
    const {busqueda , product , handleChange} = useContext(busquedaContext)
        return(
            
<>
    <article className="search">
            <ul className="tagsRopa">
                <li>
                    <Link to={"/category/zapatillas"}><a>Zapatillas</a></Link>
                </li>
                <li>
                    <Link to={"/category/remeras"}><a >Remeras</a></Link>
                    
                </li>
                <li>
                    <Link to={"/category/buzos"}><a >Buzos</a></Link>
                    
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