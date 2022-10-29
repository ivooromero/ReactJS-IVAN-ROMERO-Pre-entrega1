import { createContext } from "react";
import { useState } from "react";
import React from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    const añadirProducto = (product , quantity) => {
        let newCart;
        let item = cart.find(item => item.id === product.id);
        if (item){
            item.quantity += quantity
            newCart = [...cart];
        }else{
            item = {...product, quantity: quantity};
            newCart = [ ...cart, item];
        }
        setCart(newCart)

    }


    const removeItem = (itemId) => {
      const cartDraft = cart.filter((item) => item.id !== itemId);
      setCart(cartDraft);
    }
  
  
    const isInCart = (id) => cart.some((item) => item.id === parseInt(id));
  
    const totalQuantity = cart.reduce((count, item) => count + item.quantity, 0);
    console.log(cart)
    return (
      <CartContext.Provider value={{ cart, añadirProducto, removeItem, isInCart, totalQuantity }}>
        {children}
      </CartContext.Provider>
    )
  };

export default CartProvider;