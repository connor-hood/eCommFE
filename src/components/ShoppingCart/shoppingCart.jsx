import React from 'react';

const ShoppingCart = (props) => {
    return (
        <div>
            {props.userCart.map((i) => 
                <div></div> 
            )}
        </div>
    );
}
 
export default ShoppingCart;