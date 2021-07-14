import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/AppBar";

import "./App.css";
import HomePage from "./views/Home";
import ProductDetail from "./views/ProductDetail";

export const ShopContext = React.createContext<Products.Product[]>([]);

function App() {
  const [productsList, setProductList] = useState<Products.Product[]>([]);


  const addToCart = (newProduct: Products.Product) => {
    const find = productsList?.find(product => product.id === newProduct.id);

    if(find) return;
    console.log(newProduct)
    const list = productsList;

    list.push(newProduct);

    setProductList(list);
  }

  return (
    <ShopContext.Provider value={productsList}>
    <Container>
      <Menu/>
      <br/><br/>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage addToCart={addToCart} />
            </Route>
            <Route exact path="/detail/:id">
              <ProductDetail />
            </Route>
          </Switch>
        </Router>
    </Container>
    </ShopContext.Provider>
  );
}

export default App;
