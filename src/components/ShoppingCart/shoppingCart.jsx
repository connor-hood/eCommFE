import { render } from '@testing-library/react';
import React from 'react';
import axios from 'axios';
import './shoppingCart.css';

const ShoppingCart = (props) => {
    const currentUser = props.currentUser;
    const userCart = props.userCart;

    if (currentUser == null) {
        return (
            <div>
                <h1>Please Login!</h1>
            </div>
        )
    } else if (userCart != null){
        return (
            <table className='cart'>
                {userCart.map((i) => 
                    <tr>
                        <td><img src={i.product.imageURL} alt="placeholder" height="150vw" width="150vw"/></td>
                        <td>{i.product.name}</td>
                        <td>{i.product.description}</td>
                        <td>{i.product.price}</td>
                        <td>{i.quantity}</td>
                        <td><button>Delete</button></td>
                    </tr>
                )}
            </table>
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