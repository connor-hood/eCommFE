import React, { Component} from 'react';
import './searchbar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            searchQuery: ''
        }
    }
    
    handleChange = (event) =>{ 
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSearch = (event) => {
        event.preventDefault();
        const searchTerm = {
            searchQuery: this.state.searchQuery
        }
        this.props.addSearchQuery(searchTerm.searchQuery.toLowerCase());
    }

    render() { 
        return (
            <div className='S.body' >
                <form onSubmit={(event) => this.handleSearch(event)} className="S.SearchBar" >
                    <input className="S.search" type="text" name="searchQuery" placeholder="Search.." value={this.state.searchQuery} onChange={(event) => this.handleChange(event)} />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}
 
export default SearchBar;