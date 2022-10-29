import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header';
import './itemDetailContainer.css'
import { getProduct } from '../Utils/functions';
import { CartContext} from '../context/CartContext';
import swal from 'sweetalert';
const ItemDetailContainer = () => {
    const {añadirProducto} = useContext(CartContext);

    
    const { id } = useParams();
    const [getProducto, setgetProducto] = useState([])
    const [producto , setProducto] = useState({})
    useEffect(()=>{
        getProduct(id)
            .then((data) => setgetProducto(data))
            .catch((error) => console.warn(error))

    }, [])

        getProduct(id)
            .then((data) => setProducto(data[0]))
            .catch((error) => console.warn(error))


    const addProduct= () =>{
        añadirProducto(producto , 1)
        swal("Añadido al carrito" , "" , "success")
    }


    return(
        <>
        <Header clase = "p"></Header>
        {getProducto.map((producto, i) =>(
         <section className='padre'>
         <div className='boxProducto'>
             <div className='Producto'>
                 <img src={producto.imagen}></img>
             </div>
             <div className='especificacionesProducto'>
                 <h2>{producto.nombre}</h2>
                 <h4>$ {producto.precio}</h4>
                 <p>6 cuotas sin interés</p>
                 <p>10% de descuento pagando con Pago efectivo en local (NO APLICA OUTLET NI OFERTAS)</p>
                 <button onClick={addProduct} >Comprar</button>
             </div>
         </div>
         </section>           
        ))
        }
        
        </>
    )
}

export default ItemDetailContainer