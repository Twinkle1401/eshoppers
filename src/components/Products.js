import React, { useContext, useState } from "react";
import { ProductsContext } from "../Global/ProductsContext";
import { CartContext } from "../Global/CartContext";
import Banner from "./Banner";
import {Link} from "react-router-dom";

const Products = () => {
    const { products } = useContext(ProductsContext);
    const { dispatch } = useContext(CartContext);


    return (
        <>
            <div className="container">
                <Banner />
                <div className="products">
                    {products.map((product) => {


                        const click = () => {
                            dispatch({ type: "add_to_cart", id: product.id, product }); 
                            product.add = 'Added';

                        }

                        return (
                            <div className="product" key={product.id}>
                            <Link to={"product/" + product.name}>
                                <div className="product-img">
                                    <img src={product.image} alt="not found"></img>
                                </div>
                                </Link>
                                <div className="product-details">
                                    <div className="product-name">
                                        {product.name}
                                    </div>
                                    <div className="product-price">
                                        ${product.price}.00
                                </div>
                                </div>
                                {product.status === 'off10' ? <div className="off10">10% off</div> : ''}
                                {product.status === 'off20' ? <div className="off20">20% off</div> : ''}
                                <div className="add-cart" onClick={click}>
                                    {product.add}</div>
                            </div>
                        );

                    })}
                </div>
            </div>
        </>
    )
}

// const Products = () => {
//     const { products } = useContext(ProductsContext);
// const {dispatch}= useContext(CartContext);

//     return (
//         <>
//         <div className="container">
//         <Banner />
//             <div className="products">
//                 {products.map((product) => {
//                     return (
//                         <div className="product" key={product.id}>
//                             <div className="product-img">
//                                 <img src={product.image} alt="not found"></img>
//                             </div>
//                             <div className="product-details">
//                                 <div className="product-name">
//                                     {product.name}
//                                 </div>
//                                 <div className="product-price">
//                                     ${product.price}.00
//                                 </div>
//                             </div>
//                         {product.status==='off10' ? <div className="off10">10% off</div>: ''}
//                         {product.status==='off20' ? <div className="off20">20% off</div>: ''}
//                             <div className="add-cart" onClick={() => dispatch({type: "add_to_cart", id: product.id, product: product})}>Add to cart</div>
//                         </div>
//                     );

//                 })}
//             </div>
//             </div>
//         </>
//     )
// }



export default Products;