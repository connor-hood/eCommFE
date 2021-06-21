import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './productDetail.css';

const ProductDetail = (props) => {

    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        getReviews(props.selectedProduct.productId);
    }, []);
    

    const getReviews = async (productId) => {
        let query = `https://localhost:44394/api/review/${productId}`
        try{
            let response = await axios.get(query);
            console.log(response);
            setReviews(response.data);
        }
        catch(error){
            console.log(error);
        }
    }

    if(reviews !== null){
        debugger;
        return(
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
                <div></div>
                <div></div>
                <div>
                    {reviews.map((review) => 
                        <div>{review.text}</div>
                    )}
                </div>
                <div>
                    Write a review...
                </div>
            </React.Fragment>
        );
    }
    else{
        return(
            <h2>Loading Content...</h2>
        );
    }
}

export default ProductDetail;
