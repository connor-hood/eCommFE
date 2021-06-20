import React from 'react';
import './navBar.css';
import SearchBar from '../Searchbar/searchbar';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return(
    <div class="navbar">
      <Link to='/'>Home</Link>
      <div class="dropdown">
        <div class="dropbtn" a href="#">Products</div>

        <div class="dropdown-one">
          <div id="link1" class="dItem" href="#">Video Games

            <div class="dropdown-two">
              <div onClick={() => props.addSearchQuery('fighting')} class="dItem" id="file" href="#">Fighting</div>
              <div onClick={() => props.addSearchQuery('shooting')} class="dItem" id="file" href="#">Shooting</div>
              <div onClick={() => props.addSearchQuery('arcade')} class="dItem" id="file" href="#">Arcade</div>
              <div onClick={() => props.addSearchQuery('sandbox')} class="dItem" id="file" href="#">Sandbox</div>
              <div onClick={() => props.addSearchQuery('rpg')} class="dItem" id="file" href="#">RPG</div>
              <div onClick={() => props.addSearchQuery('strategy')} class="dItem" id="file" href="#">Strategy</div>
            </div>
          </div>
          <div class="dItem" href="#">Board Games</div>
          <div class="dItem" href="#">Roleplaying games</div>
        </div>
      </div> 
      <Link to='/add'>Add a Product!</Link>
      <a href="#cart">Cart</a>

          <Link style={{float: 'right'}} to='/login'>Log In/Log Out</Link>
          <a href="#register" style={{float: 'right'}}>Register</a>
      
      <span className="searchbar">
      <SearchBar addSearchQuery={props.addSearchQuery} allProducts={props.allProducts} />
      </span>
    </div>
    )
}

export default NavBar;