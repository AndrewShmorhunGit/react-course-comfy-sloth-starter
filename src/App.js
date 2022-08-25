import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import styled from "styled-components";
import {
  HomePage,
  SingleProductPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  AboutPage,
  ProductsPage,
  PrivatRoute,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar /> <Sidebar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/products">
          <ProductsPage />
        </Route>
        <Route exact path="/products/:id" children={<SingleProductPage />} />
        <PrivatRoute exact path="/checkout">
          <CheckoutPage />
        </PrivatRoute>
        <Route exact path="*" children={<ErrorPage />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
