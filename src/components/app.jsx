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
            userToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFrdXJvd3NraSIsImVtYWlsIjoiYWFyb25AZGV2Y29kZWNhbXAuY29tIiwiaWQiOiIzMDZmYTRhMC1mMzllLTQ2OTgtOTIxZC0xMzg1NDlmZTFkNmEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJVc2VyIiwiZXhwIjoxNjIzOTY0Mzg1LCJpc3MiOiJlQ29tbWVyY2VXZWJBUEkiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxIn0.fnBezSyG3F2b7le2hevh_Y5BV8FEZtVkijL2nlu63a4"
        }
    }

    componentDidMount = () => {
        this.getAllProducts();
        this.getUser(this.state.userToken);
    }

    getUser = async (token) => {
        debugger;
        let response = await axios.post('https://localhost:44394/api/examples/user', {headers:{"Authorization" : `Bearer ${token}`}}).then(({ response }) => response);
        this.setState({currentUser: response});
        debugger;
        console.log(this.state.currentUser);
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
                
                

            </div>
            
        );
    }
}

export default App;