import React from 'react';
import './productDetail.css';

const ProductDetail = (props) => {

    if(props.selectedProduct !== null){
        return(
            <div>
                <img src={props.selectedProduct.imageURL} alt="placeholder" height="500" width="400"/>
                <p>Name: {props.selectedProduct.name}</p>
                <p>Description: {props.selectedProduct.description}</p>
                <p>Type: {props.selectedProduct.type}</p>
                <p>Age Rating: {props.selectedProduct.ageRating}</p>
                <p>Genre: {props.selectedProduct.genre}</p>
                <p>Price: ${props.selectedProduct.price}</p>
            </div>
        );
    }
    else{
        return("Uh oh...error");
    }
}

export default ProductDetail;