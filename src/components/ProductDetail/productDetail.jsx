import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './productDetail.css';
import Reviews from '../Reviews/reviews.jsx';
import NewReview from '../NewReview/NewReview.jsx';

const ProductDetail = (props) => { 
    console.log(props)
    return(
        <React.Fragment>
        <div className="ProductDetailWrapper">
            <div className="ProductImage"> 
                <img src={props.selectedProduct.imageURL} alt="placeholder" height="400vw" width="100%"/>
            </div>
            <div className="ProductAverageRating">
                <h2>Rating:  </h2>
            </div>
            <div className="ProductName">
                <h1>{props.selectedProduct.name}</h1>
            </div>
            <div className="ProductDescription">
                <h2>Details:</h2>
                <h2> {props.selectedProduct.description}</h2>
            </div>
            <div className="ProductStats">
                    <div className="Type">
                        <h3>Type:</h3><br/>
                        <h2 className='StatBox'>{props.selectedProduct.type}</h2>
                    </div>
                    <div className="Age">
                        <h3>Age Rating:</h3><br/>
                        <h2 className='StatBox'>{props.selectedProduct.ageRating}</h2>
                    </div>
                    <div className="Genre">
                        <h3>Genre:</h3><br/>
                        <h2 className='StatBox'>{props.selectedProduct.genre}</h2>
                    </div>
                    <div className="Price">
                        <h3>Price:</h3><br/>
                        <h2 className='StatBox'>${props.selectedProduct.price}</h2>
                    </div>
            </div>
            {props.currentUser != null &&
            <div className="AddToCart">
                <button style={{width:'100%'}} onClick={()=>props.addToCart(props.currentUser.id,props.selectedProduct.productId,1)}>Add To Cart</button>
            </div>
            }
        </div>
        <NewReview />
        <Reviews selectedProduct={props.selectedProduct} />
        </React.Fragment>
    );
}

export default ProductDetail;
