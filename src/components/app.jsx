import React, {Component} from 'react';
import NavBar from './NavBar/navBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: None,
        }
    }

    
    render(){
        return(
            <div>
                <h1>Hello</h1>
                <NavBar />
            </div>
        );
    }
}

export default App;