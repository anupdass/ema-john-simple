import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first10);
    const [cart,setcart] = useState([]);

    const handleProduct = (singleproduct) =>{
        console.log(singleproduct);
        const newCart = [...cart,singleproduct]
        setcart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='product'>
                {
                    product.map(pd => <Product product={pd} handleProduct={handleProduct}></Product>)
                }
            </div>
            <div className='cart'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;