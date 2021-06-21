import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Reviews = (props) => {
    // destructuring
    const { selectedProduct } = props;

    //reviews hook
    const [reviews, setReviews] = useState();

    //mimics component did mount
    useEffect(() => {
        getReviews(selectedProduct.productId);
    }, []);

    const getReviews = async (productId) => {
        let query = `https://localhost:44394/api/review/${productId}`
        try{
            let response = await axios.get(query);
            setReviews(response.data);
            debugger;
        }
        catch(error){
            console.log(error);
        }
    }

    const averageRating = (reviews) => {
        if(reviews.length == 0){
            return 0;
        }
        //            req          req
        // reduce((accumulator, currentValue, index, array) => { ... }, initialValue)
        let average = reviews.reduce((sum, review) => {
            return sum + review.rating;
        }, 0) / reviews.length;
        return average;
    }

    return(
        <React.Fragment>
            {reviews &&
                <div>
                    <div>Overall Rating: {averageRating(reviews)}</div>
                    <br></br>
                    <h2>Reviews:</h2>
                    {reviews.map((review) => 
                        <React.Fragment>
                            <span>{review.text}</span>
                            <span> Rating: {review.rating}</span>
                            <br></br>
                        </React.Fragment>
                    )}
                </div>
            }
            {!reviews &&
                <div>No reviews to show</div>
            }
        </React.Fragment>
    );
}

export default Reviews;