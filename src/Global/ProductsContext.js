import React,{createContext, useState} from 'react';

import dslr from "../assets/dslr.jpg";
import headphones from "../assets/headphone.jpg";
import glasses from "../assets/glasses.jpg";
import microphone from "../assets/microphone.jpg";
import perfume from "../assets/perfume.jpg";
import shoes from "../assets/shoes.jpg";
import watch from "../assets/watch.jpg";
import bag from "../assets/bag.jpg";

export const ProductsContext= createContext();


const ProductsContextProvider =(props) =>{
    const [products] =useState([
        {id: 1, name: 'Dslr', price:300, image: dslr, status: 'off20', add:'ADD TO CART', rating:4.5, numReviews:8, des:''},
        {id: 2, name: 'Headphones', price:30, image: headphones, status: 'off10', add:'ADD TO CART', rating:5, numReviews:7, des:''},
        {id: 3, name: 'Glasses', price:20, image: glasses, status: 'off20', add:'ADD TO CART', rating:3.5, numReviews:10, des:''},
        {id: 4, name: 'Microphone', price:200, image: microphone, status: 'off10', add:'ADD TO CART', rating:4.5, numReviews:7, des:''},
        {id: 5, name: 'Perfume', price:40, image: perfume, status: 'off10', add:'ADD TO CART', rating:4, numReviews:9, des:"This long-lasting perfume reveals its fragrance in layers Package Contents: 1 Perfume"},
        {id: 6, name: 'Shoes', price:90, image: shoes, status: 'off20', add:'ADD TO CART', rating:4, numReviews:5, des:''},
        {id: 7, name: 'Watch', price:110, image: watch, status: 'off10', add:'ADD TO CART', rating:4.5, numReviews:8, des:''},
        {id: 8, name: 'Bag', price:85, image: bag, status: 'off20', add:'ADD TO CART', rating:4, numReviews:9, des:''}
    ]);
    return (
<ProductsContext.Provider value={{ products: [...products]}}>
{props.children}
</ProductsContext.Provider>
    );
}

export default ProductsContextProvider;