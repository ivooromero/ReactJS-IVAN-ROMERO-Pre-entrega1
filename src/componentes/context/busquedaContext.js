import { createContext } from "react";
import { searchProduct } from "../Utils/functions";
import { useState } from "react";


const BusquedaContext = createContext()
const BusquedaProvider =({children}) =>{
    const [busqueda , setBusqueda] = useState("")
    const product = searchProduct(busqueda)
    const handleChange =(lec) =>{
        setBusqueda(lec.target.value)
    }
const data = {busqueda , product , handleChange}
return <BusquedaContext.Provider value={data}>{children}</BusquedaContext.Provider>
}

export {BusquedaProvider};
export default BusquedaContext;