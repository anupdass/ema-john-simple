import React from 'react';

const Cart = (props) => {
    function fixedValue(value){
        return value.toFixed(2);
    }
    const cart = props.cart;
    //const totalPrice = cart.reduce((total,prd) => total + prd.price,0);
    let totalPrice = 0;
    for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        totalPrice += element.price;
    }
    let shipping = 12.12;
    if(totalPrice>500){
        shipping = 50;
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <h5>Item Order: {cart.length}</h5>
            <h5>Shipping Cost: {shipping}</h5>
            <h5>Total Price : {fixedValue(totalPrice + shipping)}</h5>
        </div>
    );
};

export default Cart;