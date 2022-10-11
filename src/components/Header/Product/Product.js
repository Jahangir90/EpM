import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    
    const {product, handleAddToCart} = props; 
    const { name, img, seller, price, ratings } = product;
    
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className='product-info'>
                <h5>{name}</h5>
                <p>Price: ${price}</p>
                <p>Seller:{seller}</p>
                <p>Rating:{ratings}</p>
            </div>
            <button onClick={()=> handleAddToCart(product)} className="btn-cart">
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;