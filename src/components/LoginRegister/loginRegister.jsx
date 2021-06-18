import jwtDecode from 'jwt-decode';
import React, { Component } from 'react';

class LoginRegister extends Component {
    state = { 
        userName: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventOrDefault();
        
    }

    render() { 
        return ( 

            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>User Name</label>
                    <input type="text" name="userName" onChange={this.handleChange} value={this.state.userName}/>
                    <br></br>
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
                    <br></br>
                    <button type="submit">Register</button>
                    
                </form>
            </div>
         );
    }
}
 
export default LoginRegister;