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
    Link
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
            // userToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFrdXJvd3NraSIsImVtYWlsIjoiYWFyb25AZGV2Y29kZWNhbXAuY29tIiwiaWQiOiIzMDZmYTRhMC1mMzllLTQ2OTgtOTIxZC0xMzg1NDlmZTFkNmEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJVc2VyIiwiZXhwIjoxNjIzOTY0Mzg1LCJpc3MiOiJlQ29tbWVyY2VXZWJBUEkiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxIn0.fnBezSyG3F2b7le2hevh_Y5BV8FEZtVkijL2nlu63a4"
        }
    }

    componentDidMount = () => {
        this.getAllProducts();

        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({currentUser: user});
        }catch{
            console.log("Something went wrong while logging in");
        }
    }

    loginUser = () => {
        let response = axios.post(`https://localhost:44394/api/authentication/login`);
        localStorage.setItem('token', response.token);
        console.log(response.token);
    }

    getUser = async (token) => {
        let response = await axios.get('https://localhost:44394/api/examples/user', {headers:{"Authorization" : `Bearer ${token}`}}).then(({ response }) => response);
        // this.setState({currentUser: response});
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
        this.getShoppingCart()
    }

    addProductToState = (item) => {
        this.setState({
            allProducts: {...this.state.allProducts, item}
        })
        alert("Product Added");
    }

    render(){
        return(
            <Router>
                <NavBar className="NavBar"/>
            <div className='MainWrapper'>
            
                  <div className='header' style={{backgroundColor: 'teal'}}>
                    <h1 className='title'>Tantalum Games</h1>
                 </div>
                <Switch>
                    <Route path="/add" component={ProductForm}>
                        <ProductForm addProductToState={this.addProductToState}></ProductForm>
                    </Route>
                    <Route path="/login" component={LoginRegister}>
                        <LoginRegister />
                    </Route>
                    <Route path="/detail">
                        <ProductDetail selectedProduct={this.state.selectedProduct} />                   
                    </Route>

                    <Route path="/">
                        <div className='Body' style={{backgroundColor: 'grey'}}>
                            <HomeBody allProducts={this.state.allProducts} handleSelect={this.handleSelect}/>
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