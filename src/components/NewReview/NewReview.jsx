import React, { Component } from 'react';
import axios from 'axios';
import './reviewForm.css';

class NewReview extends Component {
    constructor(props) {
        super(props);
        debugger;
        this.getInfo(props);
            this.state = {
                rating: 0,
                text: "",
                productId: props.selectedProduct.productId,
                userId: props.currentUser.id,
             }
        }
    
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
       };

    setRating = (event) => {
        this.setState({
            rating: event.target.value
        });
    }

    handleSubmit = async(event) => {
        event.preventDefault();

        debugger;
        const newReview = {
                rating: this.state.rating,
                text: this.state.text
        }
        try{
            await axios.post(`https://localhost:44394/api/Review`, newReview);
        }
        catch(er){
            console.log(er);
        }
     };
     getInfo = (props) => {
         console.log(props.currentUser);
         console.log(props.selectedProduct)
     }


    render() {
        return (           
            
           <div className= "formWrapper" >
               
                <form className="NewReview" onSubmit={(event) => this.handleSubmit(event)} >
                    <div className="newReviewTitle">
                        <label>
                            <h3>Add Review</h3>
                        </label>
                    </div>
                    <div className="SelectRating">
                        <label for="rating">Rate this product: </label>
                            <select name="rating">
                                <option onChange={(event) => this.handleChange(event)} value={5}>5</option>
                                <option onChange={(event) => this.handleChange(event)} value={4}>4</option>
                                <option onChange={(event) => this.handleChange(event)} value={3}>3</option>
                                <option onChange={(event) => this.handleChange(event)} value={2}>2</option>
                                <option onChange={(event) => this.handleChange(event)} value={1}>1</option>

                            </select>
                        {/* <img src="https://www.freeiconspng.com/uploads/white-star-icon-26.png" alt="star" className="star" style={{height: '18px'}} onclick={(event)=>this.setRating(event, 1)}/>
                        <img src="https://www.freeiconspng.com/uploads/white-star-icon-26.png" alt="star" className="star" style={{height: '18px'}} onclick={(event)=>this.setRating(event, 2)}/>
                        <img src="https://www.freeiconspng.com/uploads/white-star-icon-26.png" alt="star" className="star" style={{height: '18px'}} onclick={(event)=>this.setRating(event, 3)}/>
                        <img src="https://www.freeiconspng.com/uploads/white-star-icon-26.png" alt="star" className="star" style={{height: '18px'}} onclick={(event)=>this.setRating(event, 4)}/>
                        <img src="https://www.freeiconspng.com/uploads/white-star-icon-26.png" alt="star" className="star" style={{height: '18px'}} onclick={(event)=>this.setRating(event, 5)}/> */}
                    </div> 
                    <div>
                        
                        <input className="review-input" placeholder= "Type Your Review Here" type="text" name="name" onChange={(event) => this.handleChange(event)}/>
                    </div>

                    <button type="submit" >Add Review</button>
                
                </form>

                <div></div>
                <br/>
            </div>
         );
    }
}

export default NewReview;