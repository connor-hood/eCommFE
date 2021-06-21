import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Reviews = (props) => {
    // destructuring
    const { selectedProduct } = props;

    //reviews hook
    const [reviews, setReviews] = useState(null);

    //mimics component did mount
    useEffect(() => {
        getReviews(selectedProduct.productId);
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

    return(
        <React.Fragment>
            {reviews &&
                <div>
                    <h2>Reviews:</h2>
                    {reviews.map((review) => 
                        <div>{review.text}</div>
                    )}
                </div>
            }
            {reviews == null &&
                <div>No reviews to show</div>
            }
        </React.Fragment>
    );
}

export default Reviews;