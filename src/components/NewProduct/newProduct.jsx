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
            price: 0
         };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = async (event) => {
        try {
            event.preventDefault()
        const newProduct = {
            Name: this.state.name,
            Description: this.state.description,
            Type: this.state.type,
            AgeRating: this.state.ageRating,
            Genre: this.state.genre,
            Price: parseInt(this.state.price)
        }
        await axios.post('https://localhost:44394/api/product/', newProduct);
        } catch (error) {
            console.log(error)
        }
        
    }

    componentDidMount(){
        
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
                    <input type="submit"/>
                </form>
            </div>
         );
    }
}
 
export default ProductForm;