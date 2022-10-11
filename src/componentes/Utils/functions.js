
import { zapatillas } from "../Products/zapatillas";
export const getProductsByCategory = (categoria) => {
    const result = zapatillas.filter((product) => product.categoria === categoria);
    return result
}
export const getProduct = (id) => {
    const result = zapatillas.find((product) => product.id === id)
      return result
}