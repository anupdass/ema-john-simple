import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name,img,seller,price,stock} = props.product;
    return (
        <div className='product-container'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div className='product-name'>
                <h4>{name}</h4>
                <p><small>by:{seller}</small></p>
                <p><small>${price}</small></p>
                <p><small>only {stock} buy Early</small></p>
                <button className='main-button' key={props.product.starCount}  onClick={()=>props.handleProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
           
        </div>
    );
};

export default Product;