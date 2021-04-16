import React, { useContext } from "react";
import { ProductsContext } from "../Global/ProductsContext";
import {useParams} from "react-router-dom";

const DetailPage = () => {
    const {products} = useContext(ProductsContext);
const {name} = useParams();
const product =  products.find(x => x.name === name);
console.log(product);

    return(
<>
<div className="details-container">

<div className="details-image">
<img src={product.image} alt="not found"></img>
</div>

<div className="details">
<div className="details-name"><h5>{product.name}</h5></div>
<div className="details-price">{`$${product.price}.00`}</div>
<div className="avalaibility">Available</div>
<div className="details-rating">{`${product.rating} star Rating`}</div>
<div className="details-numReviews">{`${product.numReviews} Reviews`}</div>
<hr></hr>
<div className="des">{product.des}</div>

</div>

</div>
</>
    )
}


export default DetailPage;