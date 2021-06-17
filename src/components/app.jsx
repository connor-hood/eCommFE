import React, {Component} from 'react';
import './app.css';
import SearchBar from './Searchbar/searchbar';
import NavBar from './NavBar/navBar';
import axios from 'axios';
import HomeBody from './HomeBody/homeBody';

class App extends Component {
    constructor(props) {  
        super(props);
        this.state = {
            currentUser: null,
            allProducts: [],
            selectedProduct: null,
            userCart: null,
        }
    }

    componentDidMount = () => {
        this.getAllProducts();
    }

    getAllProducts = async () => {
        let query = "https://localhost:44394/api/product"
        let response = await axios.get(query);
        this.setState({
            allProducts: response.data
        });
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

    handleSelect = (item) => {
        this.setState({
            selectedProduct: item
        })
        console.log(this.state.selectedProduct)
    }



    render(){
        return(

            <div className='MainWrapper'>
  
                  <div className='header' style={{backgroundColor: 'teal'}}>
                    <h1 className='title'>Tantalum Games</h1>
                 </div>
                <div className='NavBar'>
                <NavBar />
                </div>
                 <div className='Body' style={{backgroundColor: 'grey'}}>
                     <HomeBody allProducts={this.state.allProducts}/>
                 </div>
                
                <div>
                    {this.state.allProducts.map(item => <div>{item.name}<button onClick={() => this.handleSelect(item)}>Select</button></div>)}
                </div> 

            </div>
            
        );
    }
}

export default App;