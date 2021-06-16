import React from 'react';
import './navBar.css'

function NavBar(props) {
    return (
        <div class="navbar">
            <a href="#home">Home</a>
        <div class="dropdown">
            <button class="dropbtn">Items 
                <i class="fa fa-caret-down"></i>
            </button>
        <div class="dropdown-content">
            <a href="#item1">Item 1</a>
            <a href="#item2">Item 2</a>
            <a href="#item3">Item 3</a>
            </div>
        </div> 
        <a href="#news">Cart</a>
</div>
    )
}

export default NavBar;