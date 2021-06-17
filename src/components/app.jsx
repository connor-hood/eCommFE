import React, {Component} from 'react';
import './app.css';
import SearchBar from './Searchbar/searchbar';
import NavBar from './NavBar/navBar';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        debugger;
        this.getAllProducts();
        this.state = {
            currentUser: null,
            allProducts: [],
            selectedProduct: null,
            userCart: null,


        }
    }

    getAllProducts = async () => {
        let query = "https://localhost:44394/api/product"
        let response = await axios.get(query);
        this.setState({
            allProducts: response.data
        });
        debugger;
        console.log(this.state.allProducts);
    }

    getProductById = async (product) => {
        let query = `https://localhost:44394/api/product/${product.id}`;
        let productById = await axios.get(query);
        this.setSTate({});
    }

    deleteProduct = async (product) => {
        let query = `https://localhost:44394/api/product/${product.id}`
        let response = axios.delete(query);

        this.getAllProducts();
    }

    updateProduct = async (product) => {

    }





    render(){
        return(

            <div className='MainWrapper'>
                  <div className='header' style={{backgroundColor: 'teal'}}>
                    <h1>Tantalum Games</h1>
                 </div>
                <div className='NavBar'>
                <NavBar />
                </div>
                 <div className='Body' style={{backgroundColor: 'grey'}}>
                     body
                 </div>

            

            </div>
            
        );
    }
}

export default App;