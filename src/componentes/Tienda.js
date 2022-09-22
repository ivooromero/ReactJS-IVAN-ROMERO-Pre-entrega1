import Data from './data'
const Tienda = () =>{
    return(
    <section className="tienda">

        <div className="separador">
            <div>
            <h2>Catalogo de productos</h2>
                <Data></Data>
            </div>
            <div className = "tiendaCarrito">
                <h3>Carrito</h3>
                <div>Productos</div>
            </div>
        </div>
    </section>
)


}

export default Tienda