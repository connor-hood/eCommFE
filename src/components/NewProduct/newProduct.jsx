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

    handleSubmit = (event) => {
        alert(
            `Product Name: ${this.state.name}
            Description: ${this.state.description}
            Type of game: ${this.state.type}
            Age Rating: ${this.state.ageRating}
            Genre: ${this.state.genre}
            Price: $${this.state.price}`)
            this.createProduct();
    }

    componentDidMount(){
        this.createProduct()
    }

    async createProduct() {
        let response = await axios.post('https://localhost:44394/api/product/', this.state);
        this.setState({
            name: response.data,
            description: response.data,
            type: response.data,
            ageRating: response.data,
            genre: response.data,
            price: response.data
        });
    }
    render() { 
        return ( 
            <div>
                <h1>Add a new product!</h1>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>Product Name: </label>
                    <input type="text" name="name" id="name" onChange={this.handleChange}></input>
                    <br></br>
                    <label>Description: </label>
                    <input type="text" name="description" id="description" onChange={this.handleChange}></input>
                    <br></br>
                    <label>Type of game: </label>
                    <input type="text" name="type" id="type" onChange={this.handleChange}></input>
                    <br></br>
                    <label>Age Rating: </label>
                    <input type="text" name="ageRating" id="ageRating" onChange={this.handleChange}></input>
                    <br></br>
                    <label>Genre: </label>
                    <input type="text" name="genre" id="genre" onChange={this.handleChange}></input>
                    <br></br>
                    <label>Price: </label>
                    <input type="text" name="price" id="price" onChange={this.handleChange}></input>
                    <br></br>
                    <input type="submit"/>
                </form>
            </div>
         );
    }
}
 
export default ProductForm;