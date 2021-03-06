import React from 'react';
import './App.css';
import {BrowserRouter,Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsContextProvider from "./Global/ProductsContext";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import CartContextProvider from "./Global/CartContext";
import DetailPage from "./components/DetailPage";

function App() {
  return (
    <>
    <ProductsContextProvider>
    <CartContextProvider>
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path="/"  component={Products}/>
        <Route exact path="/cart" component={Cart}/>
        <Route path="/product/:name" component={DetailPage} />
        <Route component={NotFound}/>
      </Switch>
      </BrowserRouter>
    </CartContextProvider>
      </ProductsContextProvider>
    </>
  );
}

export default App;
