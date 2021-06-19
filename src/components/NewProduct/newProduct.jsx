import React, { Component } from 'react';
import axios from 'axios';

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            description: '',
            type: '',
            ageRating: '',
            genre: '',
            price: 0,
            imageURL: '',
         };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const newProduct = {
                name: this.state.name,
                description: this.state.description,
                type: this.state.type,
                ageRating: this.state.ageRating,
                genre: this.state.genre,
                price: parseInt(this.state.price),
                imageURL: this.state.imageURL
            }
        this.props.addProductToState(newProduct);
        await axios.post('https://localhost:44394/api/product/', newProduct);
        } 
        catch (error) {
            console.log(error)
        }
        finally{
            this.setState({
                name: '',
                description: '',
                type: '',
                ageRating: '',
                genre: '',
                price: 0,
                imageURL: ''
            });
        }    
    }

    render() { 
        return ( 
            <div>
                <h1>Add a new product!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Product Name: </label>
                    <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange}></input>
                    <br></br>
                    <label>Description: </label>
                    <input type="text" name="description" id="description" value={this.state.description} onChange={this.handleChange}></input>
                    <br></br>
                    <label>Type of game: </label>
                    <input type="text" name="type" id="type" onChange={this.handleChange} value={this.state.type}></input>
                    <br></br>
                    <label>Age Rating: </label>
                    <input type="text" name="ageRating" id="ageRating" onChange={this.handleChange} value={this.state.ageRating}></input>
                    <br></br>
                    <label>Genre: </label>
                    <input type="text" name="genre" id="genre" onChange={this.handleChange} value={this.state.genre}></input>
                    <br></br>
                    <label>Price: </label>
                    <input type="number" name="price" id="price" onChange={this.handleChange} value={this.state.price}></input>
                    <br></br>
                    <label>Image URL (Go to Google.com/images, find an image of your product, right click and select "Copy image address": </label>
                    <input type="text" name="imageURL" id="imageURL" onChange={this.handleChange} value={this.state.imageURL}></input>
                    <br></br>
                    <input type="submit"/>
                </form>
            </div>
         );
    }
}
 
export default ProductForm;