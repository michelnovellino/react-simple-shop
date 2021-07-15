import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/AppBar";

import "./App.css";
import HomePage from "./views/Home";
import ProductDetail from "./views/ProductDetail";
import { ContextProvider } from "./contexts/cart.context";

function App() {

  return (
    <ContextProvider>
      <Container>
        <Menu />
        <br />
        <br />
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/detail/:id">
              <ProductDetail />
            </Route>
          </Switch>
        </Router>
      </Container>
    </ContextProvider>
  );
}

export default App;
