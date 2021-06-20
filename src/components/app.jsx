import React, {Component} from 'react';
import './app.css';
import NavBar from './NavBar/navBar';
import HomeBody from './HomeBody/homeBody';
import ProductDetail from './ProductDetail/productDetail';
import ShoppingCart from './ShoppingCart/shoppingCart';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import jwtDecode from 'jwt-decode';
import LoginRegister from './LoginRegister/loginRegister.jsx';
import ProductForm from './NewProduct/newProduct';

class App extends Component {
    constructor(props) {  
        super(props);
        this.state = {
            currentUser: null,
            allProducts: [],
            selectedProduct: null,
            userCart: null,
            searchQuery: '',
        }  
    }

    componentWillMount = () => {
        console.log(this.state.currentUser);
    }

    componentDidMount = () => {
        this.getAllProducts();

        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({currentUser: user});
            console.log("User logged in");
        }catch{
            console.log("User not logged in");
        }
    }

    addSearchQuery = (query) => {
        query.toLowerCase();
        this.setState({
            searchQuery: query
        });
    }

    filterProductsBySearch = (products, query) => {
        debugger;
        console.log(query);
        if(!query){
            return products;
        }
        debugger;
        let filteredProducts = products.filter((product) => {
            let productName = product.name;
            if(productName.toLowerCase().includes(query.toLowerCase())){
                return true;
            }
        });
        return filteredProducts;
    }

    registerUser = async (userCredentials) => {
        axios.post(`https://localhost:44394/api/authentication`, userCredentials).then(console.log("User registered"));
        alert("User registered!");
    }

    loginUser = async (userCredentials) => {
        try{
            let query = `https://localhost:44394/api/authentication/login`;
            let response = await axios.post(query, userCredentials);
            console.log(response);
            let token = response.data.token;
            localStorage.setItem("token", token);
        }
        catch(er){
            console.log("There has been an error while logging in");
            console.log(er);
        }
    }

    logoutUser = () => {
        localStorage.removeItem("token");
    }

    getUser = async (token) => {
        let response = await axios.get('https://localhost:44394/api/examples/user', {headers:{"Authorization" : `Bearer ${token}`}}).then(({ response }) => response);
        console.log(response.data);
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
        this.setState({});
    }

    deleteProduct = async (product) => {
        let query = `https://localhost:44394/api/product/${product.id}`
        let response = axios.delete(query);

        this.getAllProducts();
    }

    handleSelect = (item) => {
        this.setState({
            selectedProduct: item
        }, () => {console.log(this.state.selectedProduct)});
    }

    // Shopping Cart Functions
    getShoppingCart = async (currentUser) => {
        let query = `https://localhost:44394/api/shoppingcart/${currentUser.id}`
        let response = await axios.get(query);
        this.setState({
            userCart: response.data
        }, () => {console.log(this.state.userCart)}
        );
    }

    addShoppingCartItem = (userId, productId, quantity) => {
        let values = {
            UserId: userId,
            ProductId: productId,
            Quantity: quantity
        };
        async function postData() {
            await axios.post(`https://localhost:44394/api/shoppingcart`, values)
        }
        postData();
        this.getShoppingCart();
    }

    addProductToState = (item) => {
        this.setState({
            allProducts: [...this.state.allProducts, item]
        });
        alert("Product Added");
    }

    render(){
        const user = this.state.currentUser;
        return(
            <Router>
                {user && 
                <NavBar addSearchQuery={this.addSearchQuery} allProducts={this.state.allProducts} className="NavBar"/>
                }
            <div className='MainWrapper'>
                <div className='header' style={{backgroundColor: 'teal'}}>
                    <h1 className='title'>Tantalum Games</h1>
                </div>
                <Switch>
                    <Route path="/add" component={ProductForm}>
                        <ProductForm addProductToState={this.addProductToState}></ProductForm>
                    </Route>
                    <Route path="/login" component={LoginRegister}>
                        <LoginRegister loginUser={this.loginUser} />
                    </Route>
                    <Route path="/detail">
                        <ProductDetail selectedProduct={this.state.selectedProduct} />                   
                    </Route>
                    <Route path="/">
                        <div className='Body' style={{backgroundColor: 'grey'}}>
                            <HomeBody searchQuery={this.state.searchQuery} filterProducts={this.filterProductsBySearch} allProducts={this.state.allProducts} handleSelect={this.handleSelect}/>
                        </div>
                    </Route>  
                    <Route path="/shoppingcart">
                        <ShoppingCart userCart={this.state.userCart} />    
                    </Route>         
                </Switch>
            </div>
            </Router>
        );
    }
}

export default App;