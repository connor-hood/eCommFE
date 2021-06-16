import React, { Component} from 'react';
import './searchbar.css';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            search:'',
            searchResults: [],
        }
    }
    
    handleChange = (event) =>{
        
        this.setState({
        search: event.target.value
        });
        console.log(this.state.search)
        }

    render() { 
        return (
            <div className='S.body' >
                <form className="S.SearchBar" >
                <input className="S.search" type="text" name="searchbar" placeholder="Search.." onChange={(event) => this.handleChange(event)}>
            </input>
            <button type="submit">Search</button>
                </form>

            </div>
        );
    }
}
 
export default SearchBar;