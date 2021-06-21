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
import LoginUser from './LoginUser/loginUser.jsx';
import ProductForm from './NewProduct/newProduct.jsx';
import RegisterUser from './RegisterUser/registerUser.jsx';

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

        
    }

    addSearchQuery = (query) => {
        query.toLowerCase();
        this.setState({
            searchQuery: query
        });
    }

    filterProductsBySearch = (products, query) => {
        if(!query){
            return products;
        }
        let filteredProducts = products.filter((product) => {
            if(product.name.toLowerCase().includes(query.toLowerCase()) || product.genre.toLowerCase().includes(query.toLowerCase())){
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
            this.getUser(token);
        }
        catch(er){
            console.log("There has been an error while logging in");
            console.log(er);
        }
    }

    logoutUser = () => {
        localStorage.removeItem("token");
        this.setState({currentUser: null})
    }

    getUser = async (token) => {
        let response = await axios.get('https://localhost:44394/api/examples/user', {headers:{"Authorization" : `Bearer ${token}`}}).then(({ response }) => response);
        const jwt = localStorage.getItem('token');  
        try{
            const user = jwtDecode(jwt);
            this.setState({currentUser: user});
            console.log(this.state.currentUser)
            console.log("User logged in");
            this.getShoppingCart();
        }catch{
            console.log("User not logged in");
        }
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
    getShoppingCart = async () => {
        try {
            console.log('User ID: ',this.state.currentUser.id);
            const query = `https://localhost:44394/api/shoppingcart/${this.state.currentUser.id}`
            const response = await axios.get(query);
            this.setState({
                userCart: response.data
            }, () => {console.log(this.state.userCart)}
            );
        } catch (error) {
            console.log(error);
        }
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
        console.log("CurrentUser", this.state.currentUser)
        return(    
            <div className='MainWrapper'>
                <div className='header' style={{backgroundColor: 'teal'}}>
                    <h1 className='title'>Tantalum Games</h1>
                </div>
                <Router>
                    {console.log(this.state.currentUser)}
                <NavBar logout = {this.logoutUser} user={this.state.currentUser} addSearchQuery={this.addSearchQuery} allProducts={this.state.allProducts} className="NavBar"/>
                <Switch>
                    <Route path="/add" component={ProductForm}>
                        <ProductForm addProductToState={this.addProductToState}></ProductForm>
                    </Route>
                    <Route path="/register">
                        <RegisterUser />
                        </Route>
                    <Route path="/login" component={LoginUser}>
                        <LoginUser loginUser={this.loginUser} />
                    </Route>
                    <Route path="/detail">
                        <ProductDetail selectedProduct={this.state.selectedProduct} addToCart={()=>this.addShoppingCartItem(this.state.currentUser,this.state.selectedProduct,1)} />                   
                    </Route>
                    <Route path="/cart" component={() => <ShoppingCart currentUser={this.state.currentUser} userCart={this.state.userCart} />} />
                    <Route path="/">
                        <div className='Body' style={{backgroundColor: 'grey'}}>
                            <HomeBody user={this.state.currentUser}searchQuery={this.state.searchQuery} filterProducts={this.filterProductsBySearch} allProducts={this.state.allProducts} handleSelect={this.handleSelect}/>
                        </div>
                    </Route>  
                </Switch>
                </Router>  
            </div>
        );
    }
}

export default App;