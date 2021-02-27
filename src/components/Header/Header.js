import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <nav className='nav'>
                <a href="/shop">shop</a>
                <a href="/order">order</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};
export default Header;