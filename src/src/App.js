// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';


const App = () => {
    const [cart, setCart] = useState([]);
    const products = [
        { id: 1, name: 'Salmon', price: 10 },
        { id: 2, name: 'Tuna', price: 15 },
        { id: 3, name: 'Trout', price: 12 },
    ];

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <Router>
            <Header cartCount={cart.length} />
            <Routes>
                <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cartItems={cart} />} />
            </Routes>
        </Router>
    );
};

export default App;
