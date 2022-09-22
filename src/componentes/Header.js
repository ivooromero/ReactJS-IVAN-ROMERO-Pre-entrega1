import hawx from '../hawx.png'
const Header = ({children}) => {
    return(
        <header id="home" class="p">
        <nav className="header">
        <img src= {hawx} className="logo"></img>
        <form className = "formHeader">
            <a href = "#home" >Home</a>
            <a href = "#tienda" >Store</a>
        </form>
        </nav>
        </header>


    )
}
export default Header;
