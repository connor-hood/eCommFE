import { render } from '@testing-library/react';
import React from 'react';
import axios from 'axios';

const ShoppingCart = (props) => {
    const currentUser = props.currentUser;
    const userCart = props.userCart;
    
    const getProductName = async (productId) => {
        let query = `https://localhost:44394/api/product/${productId}`;
        let response = await axios.get(query);
        let productById = response.data;
        console.log(productById)
    }

    if (currentUser == null) {
        return (
            <div>
                <h1>Please Login!</h1>
            </div>
        )
    } else if (userCart != null){
        return (
            <div>
                {userCart.map((i) => 
                    <div>
                        <div>{i.productId}</div>
                    </div>
                )}
            </div>
        );
    } else {
        return (
            <div>
                <h1>Cart is Empty!</h1>
            </div>
        )
    }


}
 
export default ShoppingCart;