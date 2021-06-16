import React from 'react';
import './navBar.css'

function NavBar(props) {
    return (
        <div class="navbar">
      <a href="#home">Home</a>
      
      <div class="dropdown">
        <div class="dropbtn">Products</div>
        {/* //Main Dropdown */}
        <div class="dropdown-one">
          <div id="link1" class="dItem" href="#">Video Games
{/* <!--             Inside Dropdown --> */}
            <div class="dropdown-two">
              <div class="dItem" id="file" href="#">Fighting</div>
              <div class="dItem" id="file" href="#">Shooter</div>
              <div class="dItem" id="file" href="#">Action</div>
              <div class="dItem" id="file" href="#">Puzzle</div>
              <div class="dItem" id="file" href="#">Exploratory</div>
              <div class="dItem" id="file" href="#">Real Time Strategy</div>
            </div>
          </div>
          <div class="dItem" href="#">Table Top Games</div>
          <div class="dItem" href="#">Role Playing Games</div>
          <div class="dItem" href="#">Add a Product</div>
        </div>
      </div> 
      <a href="#cart">Cart</a>
      
    </div>
    )
}

export default NavBar;