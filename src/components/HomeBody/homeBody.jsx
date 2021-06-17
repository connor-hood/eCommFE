import React, {Component} from 'react';
import './homeBody.css';

const HomeBody = (props) => {
    return(
        <div className="HomeWrapper">
            <div className="greeting">
                <h2 className="welcome">Welcome Guest(user if signed in)!</h2>
            </div>
            <div className="cardGrid">
                {props.allProducts.map((item) => 
                    <div className="productCard">
                        <h3>{item.name}</h3>
                    <div className="product image">
                        <img src="https://via.placeholder.com/250" alt="placeholder"/>
                    </div>
                    <div className= "productInfo">
                        <ul>
                            <li>{item.description}</li>
                            <li>{item.price}</li>
                        </ul>
                        <a href="#"> Product detail</a>                     
                    </div>
                </div>
                )}
            </div>
        </div>
    );
}
 
export default HomeBody;