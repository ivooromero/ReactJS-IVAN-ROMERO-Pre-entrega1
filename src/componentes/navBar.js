import React, {useState} from 'react';
import { zapatillas } from './Products/zapatillas';
import { remeras } from './Products/remeras';
import CartWidget from './Cart/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () =>{
        return(
<>
    <article className="search">
            <ul className="tagsRopa">
                <li>
                    <Link  to={"/category/:zapatillas"}><a href="#zapatillas">Zapatillas</a></Link>
                </li>
                <li>
                    <Link to={"/category/:remeras"}><a href="#remeras">Remeras</a></Link>
                    
                </li>
                <li>
                    <Link to={"/category/:buzos"}><a href="#buzos">Buzos</a></Link>
                    
                </li>
            </ul>
            <input type="text" placeholder="Search.." className="busqueda" ></input>
            <CartWidget></CartWidget>
        </article>
</>        

)


}

export default NavBar