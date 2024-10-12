// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
    return (
        <header className='header' style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', }}>
            <img className='logo' src="https://t4.ftcdn.net/jpg/02/69/74/57/240_F_269745727_wTMoo0hTalZbNBC4O6F8yXTRbSVwWF0J.jpg" alt="Logo" />
            <h1>NPR Fish Mart</h1>
            <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
                <div style={{ position: 'relative' }}>
                    <span role="img" aria-label="cart">🛒</span>
                    {cartCount > 0 && (
                        <span style={{
                            position: 'absolute',
                            top: '-5px',
                            right: '-10px',
                            background: 'red',
                            color: 'white',
                            borderRadius: '50%',
                            padding: '2px 6px',
                            fontSize: '12px'
                        }}>
                            {cartCount}
                        </span>
                    )}
                </div>
            </Link>
        </header>
    );
};

export default Header;
