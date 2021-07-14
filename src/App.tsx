import { Container, Grid } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/AppBar";

import "./App.css";
import HomePage from "./views/Home";
import ProductDetail from "./views/ProductDetail";

function App() {
  return (
    <Container>
      <Menu/>
      <br/><br/>
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
  );
}

export default App;
