import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './reviews.css';

const Reviews = (props) => {
    // destructuring
    const { selectedProduct, currentUser } = props;

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

    const renderStars = (review) => {
        if(review.rating == 5){

        }
    }

    console.log("review hook", reviews)
    if(reviews !== null){
    return(
        // react won't let me conditionally render anything here

        // use the average rating and mess with the stars. also the user can't give a rating
        <React.Fragment>
        <div >
                <h2>Overall Rating: {averageRating(reviews)}/5 </h2>
            </div>
        <div className="ReviewWrapper">       
            <div className="reviewBody">
                <h4>Reviews ({reviews.length} total Reviews)</h4>           
                    {reviews.map((review) =>
                    
                        <div className="userReview">
                    
                            <div className="ReviewAuthor"> 
                                <h4>User {review.User}</h4> 
                            </div>
                            <div className="StarRating">
                                {review.rating}/5 Stars
                                {/* <img className={"star star-" + (review.rating)} src="https://www.freeiconspng.com/uploads/white-star-icon-26.png" alt="star" style={{height: '18px'}}/> */}

                                    {/* <img className="star star-1"src="https://www.freeiconspng.com/uploads/white-star-icon-26.png" alt="star" style={{height: '18px'}}/>
                                    <img className="star star-2"src="https://www.freeiconspng.com/uploads/white-star-icon-26.png" alt="star" style={{height: '18px'}}/>
                                    <img className="star star-3"src="https://www.freeiconspng.com/uploads/white-star-icon-26.png" alt="star" style={{height: '18px'}}/>
                                    <img className="star star-4"src="https://www.freeiconspng.com/uploads/white-star-icon-26.png" alt="star" style={{height: '18px'}}/>
                                    <img className="star star-5"src="https://www.freeiconspng.com/uploads/white-star-icon-26.png" alt="star" style={{height: '18px'}}/> */}
                            </div >

                            <div className="ReviewBody">
                                <p>{review.text} </p>
                            </div>
                        </div>
                    )}
            </div>
        </div>
        </React.Fragment>
    );}
    else{
        return <h2>No reviews</h2>
    }
}
     
export default Reviews;