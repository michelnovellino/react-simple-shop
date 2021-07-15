import React, { useState } from "react";

type ContextData = {
  cartItems: Products.Product[];
  addToCart: (product: Products.Product) => void;
  total: number;
};

export const CartContext = React.createContext<ContextData>({
  cartItems: [],
  addToCart: (product) => {},
  total: 0,
});

export const ContextProvider: React.FC = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<Products.Product[]>([]);

  const addToCart = (newProduct: Products.Product) => {
    const find = cartItems?.find(
      (product: Products.Product) => product.id === newProduct.id
    );

    if (find) return;

    setCartItems([...cartItems, newProduct]);
  };

  const value: ContextData = {
    cartItems,
    addToCart,
    total: cartItems
      ?.map((item: Products.Product) => item.price)
      .reduce((subTotal: number, current: number) => subTotal + current, 0),
  };

  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};
