import React, { useState } from "react";

type ContextData = {
    cartItems: Products.Product[],
    addToCart: (product: Products.Product) => void
}

export const CartContext = React.createContext<ContextData>({ cartItems: [], addToCart: (product) => {} });


export const ContextProvider: React.FC = ({ children }: any) => {
    const [cartItems, setCartItems] = useState<Products.Product[]>([]);

    const addToCart = (newProduct: Products.Product) => {
        const find = cartItems?.find((product: Products.Product) => product.id === newProduct.id);
        
        console.log("INICIANDO ADDTOCART")

        if(find) return;

        console.log("NO EXISTE EN EL CARRITO")

        const list = cartItems;

        list.push(newProduct);
        
        setCartItems(list);
        console.log("FINAL",list, cartItems)

    }

    const value: ContextData = {
        cartItems,
        addToCart
    }

    return <CartContext.Provider value={value}> {children} </CartContext.Provider>
}