import Header from "../Header";
import CartProvider, { CartContext } from "../context/CartContext";
import { useCartContext } from "../context/CartContext";
import { useContext, useState } from "react";
import './carrito.css'
import { createOrder } from "../Utils/functions";
import swal from "sweetalert";
const Cart = () =>{
  const { cart, removeItem, clear } = useContext(CartContext);

    const eliminarObjeto = (id) =>{
        removeItem(id)
    }
    let total = 0;
    cart.forEach((item) => {
    total += item.precio * item.quantity
    });

    const [primerNombre , setPrimerNombre] = useState("")
    const [segundoNombre , setSegundoNombre] = useState("")
    const [calle, setCalle] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [estado, setEstado] = useState("")
    const [codigopostal, setCodigoPostal] = useState("")

    const buyerMock = {
      primerNombre,
      segundoNombre ,
      calle,
      ciudad,
      estado,
      codigopostal,
    }
    const handleBuy = async () => {
      const newOrder = {
        buyer: buyerMock,
        items: cart,
        total
        
      };
      const newOrderId = await createOrder(newOrder);
      swal(swal("Tu numero de orden es "+ "'"+newOrderId+"'" , "Cualquier duda consultar al soporte", "success"))
    }

    return(
    <>
    <Header></Header>
    <article>
        <div className="carritoGeneral">
            <article className="productosEnElCarrito">
            <div className="productoUnico">
                    <p>Nombre</p>
                    <p>Precio</p>
                    <p>Vista previa</p>
                    <p></p>
              </div>
                {cart.map((item, i) => (
                  <div key={i} className="productoUnico">
                    <h5>{item.nombre}</h5>
                    <p>{"U$D "+ item.precio}</p>
                    <p>{item.quantity}</p>

                    <img src={item.imagen}></img>
                    <button id='close' onClick={() => eliminarObjeto(item.id)}>close</button>
                  </div>
                ))}
                <div>
                <div class="wrapper">
    <div class="container">
        <form action="">
            <h1>
                <i class="fas fa-shipping-fast"></i>
                Detalles del envío

            </h1>
            <div class="name">
                <div>
                    <label for="f-name">Primer nombre</label>
                    <input type="text" name="f-name" onChange={(lec) => {setPrimerNombre(lec.target.value)}}></input>
                </div>
                <div>
                    <label for="l-name">Segundo nombre</label>
                    <input type="text" name="l-name" onChange={(lec) => {setSegundoNombre(lec.target.value)}}></input>
                </div>
            </div>
            <div class="street">
                <label for="name">Calle</label>
                <input type="text" name="address"onChange={(lec) => {setCalle(lec.target.value)}}></input>
            </div>
            <div class="address-info">
                <div>
                    <label for="city">Ciudad</label>
                    <input type="text" name="city"onChange={(lec) => {setCiudad(lec.target.value)}}></input>
                </div>
                <div>
                    <label for="state">Estado</label>
                    <input type="text" name="state"onChange={(lec) => {setEstado(lec.target.value)}}></input>
                </div>
                <div>
                    <label for="zip">Código postal
</label>
                    <input type="text" name="zip"onChange={(lec) => {setCodigoPostal(lec.target.value)}}></input>
                </div>
            </div>
            <h1>
                <i class="far fa-credit-card"></i> Información del pago

            </h1>
            <div class="cc-num">
                <label for="card-num">Tarjeta de credito N°</label>
                <input type="text" name="card-num"></input>
            </div>
            <div class="cc-info">
                <div>
                    <label for="card-num">Fecha</label>
                    <input type="text" name="expire"></input>
                </div>
                <div>
                    <label for="card-num">CCV</label>
                    <input type="text" name="security"></input>
                </div>
            </div>
        </form>
    </div>
</div>
                </div>
            </article>
            <section className="finalizarCompra">
              <div>
                <p>Subtotal</p>
                <p>{total}</p>
              </div>
                <p>Realiza tu pago directamente en nuestra cuenta bancaria.
                  Por favor usa la referencia del pedido como referencia de pago.
                  Tu pedido no será enviado hasta que el importe haya sido recibido en nuestra cuenta.
                </p>
                <input type="submit" value="Ir a finalizar el pedido" class="btn" onClick={handleBuy}></input>
            </section>
        </div>
    </article>
    </>
    )
}
export default Cart;