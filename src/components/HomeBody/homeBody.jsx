import React, {Component} from 'react';
import './homeBody.css';


class HomeBody extends Component {
    state = { 
        tbd: "tbd",
     }
    render() { 
        return ( 
            <div className="HomeWrapper">
                <div className="greeting">
                    <h2 className="welcome">Welcome Guest(user if signed in)!</h2>
                </div>
                <div className="cardGrid">
                <div className="productCard">
                    <h3>Name</h3>
                    <div className="product image">
                        <img src="https://via.placeholder.com/250" alt=""/>
                    </div>
                    <div className= "productInfo">
                        <ul>
                            <li>product Description</li>
                            <li>Price</li>
                        </ul>
                        <a href="#"> Product detal</a>
                        
                    </div>
                </div>
                <div className="productCard">product</div>
                <div className="productCard">product</div>
                <div className="productCard">product</div>
                <div className="productCard">product</div>
                <div className="productCard">product</div>
                <div className="productCard">product</div>
                <div className="productCard">product</div>
                <div className="productCard">product</div>
                <div className="productCard">product</div>
                <div className="productCard">product</div>
                <div className="productCard">product</div>
                </div>
            </div>
         );
    }
}
 
export default HomeBody;