import Prodc from "./Products/productosMap";
const Home = ({children}) =>{
    return(
        <>
        <article className='home'>
            {children}
            <p>HAVE A NIKE DAY!</p>
        </article>
        <Prodc></Prodc>
        </>
    )
}
export default Home;