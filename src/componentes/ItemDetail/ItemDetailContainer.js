import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { zapatillas } from '../Products/zapatillas';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header';
import './itemDetailContainer.css'
import a from "../Products/fotosProductos/asdas.png"
import { getProduct } from '../Utils/functions';
const ItemDetailContainer = () => {
    const { id } = useParams();
    const [getProducto, setgetProducto] = useState(0)
    useEffect(()=>{
        setTimeout(() =>
            setgetProducto(getProduct(id)),
            1000
        )
    })

    return(
        <>
        <Header clase = "p"></Header>
        <section className='padre'>
        <div className='boxProducto'>
            <div className='Producto'>
                <img src={getProducto.imagen}></img>
            </div>
            <div className='especificacionesProducto'>
                <h2>{getProducto.nombre}</h2>
                <h4>$ {getProducto.precio}</h4>
                <p>6 cuotas sin interés</p>
                <p>10% de descuento pagando con Pago efectivo en local (NO APLICA OUTLET NI OFERTAS)</p>
                <button>COMPRAR</button>
            </div>
        </div>
        </section>

        
        </>
    )
}

export default ItemDetailContainer