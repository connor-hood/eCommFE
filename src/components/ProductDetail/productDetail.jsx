import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './productDetail.css';
import Reviews from '../Reviews/reviews.jsx';

const ProductDetail = (props) => { 
    return(
        //should change this to go through an api request(get product by id) to be able to rerender on refresh? 
        <React.Fragment>
            <div>
                <img src={props.selectedProduct.imageURL} alt="placeholder" height="500" width="400"/>
                <p>Name: {props.selectedProduct.name}</p>
                <p>Description: {props.selectedProduct.description}</p>
                <p>Type: {props.selectedProduct.type}</p>
                <p>Age Rating: {props.selectedProduct.ageRating}</p>
                <p>Genre: {props.selectedProduct.genre}</p>
                <p>Price: ${props.selectedProduct.price}</p>
            </div>

            <br></br>

            <Reviews selectedProduct={props.selectedProduct} />
        </React.Fragment>
    );
}

export default ProductDetail;
