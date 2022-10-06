import hawx from '../hawx.png'
import { Link } from 'react-router-dom';
const Header = ({children}) => {
    return(
        <header id="home" class="p">
        <nav className="header">
        <Link to={"/"}><img src= {hawx} className="logo"></img></Link>
        <form className = "formHeader">
            <a href = "#home" >Home</a>
            <a href = "#tienda" >Store</a>
        </form>
        </nav>
        </header>


    )
}
export default Header;
