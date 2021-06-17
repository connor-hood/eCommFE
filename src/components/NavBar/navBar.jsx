import React from 'react';
import './navBar.css';
import SearchBar from '../Searchbar/searchbar';

function NavBar(props) {
    return(
    <div class="navbar">
      <a href="#home">Home</a>
      <div class="dropdown">
        <div class="dropbtn" a href="#">Products</div>

        <div class="dropdown-one">
          <div id="link1" class="dItem" href="#">Video Games

            <div class="dropdown-two">
              <div class="dItem" id="file" href="#">Fighting</div>
              <div class="dItem" id="file" href="#">Shooting</div>
              <div class="dItem" id="file" href="#">Arcade</div>
            </div>
          </div>
          <div class="dItem" href="#">Board Games</div>
          <div class="dItem" href="#">Roleplaying games</div>
        </div>
      </div> 
      <a href="#news">Cart</a>
      
          <a href="#login" style={{float: 'right'}}>Log In/Log Out</a>
          <a href="#register" style={{float: 'right'}}>Register</a>
      
      <span className="searchbar">
      <SearchBar />
      </span>
    </div>
    )
}

export default NavBar;