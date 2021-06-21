import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class RegisterUser extends Component {
    state = { 
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        email: '',
        phoneNumber: '',
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    registerUser = async (userCredentials) => {
        axios.post(`https://localhost:44394/api/authentication`, userCredentials)
        alert("User registered!");
    }

    handleSubmit = (event) => {
        event.preventDefault(); 
        
        try{  
            const userCredentials = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                userName: this.state.userName,
                password: this.state.password,
                email: this.state.email,
                phoneNumber: this.state.phoneNumber
            };
            axios.post(`https://localhost:44394/api/authentication`, userCredentials);
            alert("User Registered!");
            <Redirect to="/login">
            </Redirect>
        }
        catch(er){
            console.log("Error in Registering")
        }
        finally{
            this.setState({
                firstName: '',
                lastName: '',
                userName: '',
                password: '',
                email: '',
                phoneNumber: '',
            });
        }

    }

    render() { 
        return ( 
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>First Name: </label>
                    <input type="text" name="firstName" onChange={(event) => this.handleChange(event)} value={this.state.firstName}/>
                    <br></br>
                    <label>Last Name: </label>
                    <input type="text" name="lastName" onChange={(event) => this.handleChange(event)} value={this.state.lastName}/>
                    <br></br>
                    <label>Desired User Name: </label>
                    <input type="text" name="userName" onChange={(event) => this.handleChange(event)} value={this.state.userName}/>
                    <br></br>
                    <label>Password: </label>
                    <input type="password" name="password" onChange={(event) => this.handleChange(event)} value={this.state.password}/>
                    <br></br>
                    <label>Email: </label>
                    <input type="text" name="email" onChange={(event) => this.handleChange(event)} value={this.state.email}/>
                    <br></br>
                    <label>Phone Number: </label>
                    <input type="text" name="phoneNumber" onChange={(event) => this.handleChange(event)} value={this.state.phoneNumber}/>
                    <br></br>
                    <button type="submit">Register</button>     
                </form>
            </div>
         );
    }
}
 
export default RegisterUser;