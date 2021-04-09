import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsContextProvider from "./Global/ProductsContext";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import CartContextProvider from "./Global/CartContext";

function App() {
  return (
    <>
    <ProductsContextProvider>
    <CartContextProvider>
    <Router>
    <Navbar />
      <Switch>
        <Route exact path="/"  component={Products}/>
        <Route exact path="/cart" component={Cart}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
    </CartContextProvider>
      </ProductsContextProvider>
    </>
  );
}

export default App;
