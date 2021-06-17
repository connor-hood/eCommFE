import React from 'react';
import './productDetail.css';

const ProductDetail = (props) => {

    // axios requests below will go in app.jsx but just hashing them out for now

    

    


    return(
        <div>
            Name: {this.props.name}
            Description: {this.props.description}
            Type: {this.props.type}
            Age Rating: {this.props.agerating}
            Genre: {this.props.genre}
            Price: {this.props.price}
        </div>
    );
}

export default ProductDetail;