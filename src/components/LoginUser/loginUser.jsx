import React, { Component } from 'react';

class LoginUser extends Component {
    state = { 
        userName: '',
        password: ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault(); 
        debugger;
        try{
              
            const userCredentials = {
                userName: this.state.userName,
                password: this.state.password
            };

            this.props.loginUser(userCredentials);
            debugger;
        }
        catch(er){
            console.log("Error in LoginRegister")
        }
        finally{
            this.setState({
                userName: '',
                password: ''
            });
        }

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
                    <button type="submit">Log In</button>     
                </form>
            </div>
         );
    }
}
 
export default LoginUser;