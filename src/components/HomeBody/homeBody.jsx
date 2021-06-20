import React from 'react';
import './homeBody.css';
import { Link } from 'react-router-dom';

const HomeBody = (props) => {
    const handleSelect = props.handleSelect;
    const filteredProducts = props.filterProducts(props.allProducts, props.searchQuery)
    return(
        <div className="HomeWrapper">
            <div className="greeting">
                <h2 className="welcome">Welcome Guest(user if signed in)!</h2>
            </div>
            <div className="cardGrid">
                {filteredProducts.map((item) => 
                    <div className="productCard">
                        <h3>{item.name}</h3>
                    <div className="product image">
                        <img src={item.imageURL} alt="placeholder" height="250" width="250"/>
                    </div>
                    <div className= "productInfo">
                        <ul>
                            <li>{item.description}</li>
                            <li>Price: ${item.price}</li>
                        </ul>

                        <Link to="/detail">
                            <button type="submit" onClick={() => handleSelect(item)}>Details</button>
                        </Link>
                        {/* <button type="button" onClick= {() => handleSelect(item)}>
                        <a href="#productDetail"> {item.name} detail</a>
                        </button>                      */}
                    </div>
                </div>
                )}
            </div>
        </div>
    );
}
 
export default HomeBody;