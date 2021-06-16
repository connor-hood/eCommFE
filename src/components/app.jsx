import React, {Component} from 'react';
import './app.css';
import SearchBar from './Searchbar/searchbar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: "Null",
            allItems: "Null",
            allComments: "Null",

        }
    }



    render(){
        return(

            <div className='MainWrapper'>
                <div className='SearchBar' style={{backgroundColor: 'teal'}}>
                    <SearchBar />
                </div>
                <div className='Navigation' style={{backgroundColor: 'orange'}}>
                    navigation
                </div>
                <div className='Body' style={{backgroundColor: 'grey'}}>
                    body
                </div>



            </div>
        );
    }
}

export default App;