import React, { Component } from 'react';
import axios from 'axios';
import './reviewForm.css';

class NewReview extends Component {
    constructor(props) {
        super(props);
            this.state = {
                Rating: 0,
                Text: "",
                ProductID: "this.props.currentProduct", // TBD
                UserId: "this.props.currentUser",  // TBD
                listOfReviews: []

             }
        }
    
    handleChange = (event) =>{
        this.setState({
            Text: event.target.value
        });
       };

    SetRating(selection){
        this.setState({
            Rating: selection,
        })
        console.log(selection)
    }
    

    handleSubmit = async(event) =>{
        //event.preventDefault();

        let newReview = {
                Rating: this.state.Rating,
                Text: this.state.Text,
                ProductId: this.state.ProductID,
                UserId: this.state.user
        }

        await axios.post(`https://localhost:44394/api/Review`,newReview);

    
     };



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
                        <img src="https://www.freeiconspng.com/uploads/white-star-icon-26.png" alt="star" style={{height: '18px'}} onclick={()=>this.SetRating(1)}/>
                        <img src="https://www.freeiconspng.com/uploads/white-star-icon-26.png" alt="star" style={{height: '18px'}} onclick={()=>this.SetRating(2)}/>
                        <img src="https://www.freeiconspng.com/uploads/white-star-icon-26.png" alt="star" style={{height: '18px'}} onclick={()=>this.SetRating(3)}/>
                        <img src="https://www.freeiconspng.com/uploads/white-star-icon-26.png" alt="star" style={{height: '18px'}} onclick={()=>this.SetRating(4)}/>
                        <img src="https://www.freeiconspng.com/uploads/white-star-icon-26.png" alt="star" style={{height: '18px'}} onclick={()=>this.SetRating(5)}/>
                        {()=>this.SetRating(1)}
                    </div> 
                    <div>
                        <input placeholder= "Type Your Review Here" type="text" name="name" onChange={(event) => this.handleChange(event)}/>
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