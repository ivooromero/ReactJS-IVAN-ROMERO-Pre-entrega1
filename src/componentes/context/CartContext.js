import { Children, createContext, useContext } from "react";
import { searchProduct } from "../Utils/functions";
import { useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    /*const añadirProducto = (product , quantity) => {
      if (!isInCart(product.id)) {
        const item = {
          ...product,
          quantity
        };
        setCart([...cart, item]);
      } else {
        const itemIndex = cart.findIndex((item) => item.id === parseInt(product.id));
        const itemDraft = { ...cart[itemIndex] };
        itemDraft.quantity = itemDraft.quantity + quantity;
        const cartDraft = [...cart];
        cartDraft[itemIndex] = itemDraft;
        setCart(cartDraft);

      }
    }*/
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
  
    const clear = () => {
      setCart([]);
    }
  
    const isInCart = (id) => cart.some((item) => item.id === parseInt(id));
  
    
  
  
      // let total = 0;
      // cart.forEach((item) => {
      //   total += item.price * item.quantity
      // });
  
    const totalQuantity = cart.reduce((count, item) => count + item.quantity, 0);
    console.log(cart)
    return (
      <CartContext.Provider value={{ cart, añadirProducto, removeItem, clear, isInCart, totalQuantity }}>
        {children}
      </CartContext.Provider>
    )
  };

export default CartProvider;