// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './Component/ProductList';
import Cart from './Component/Cart';
import ContactForm from './Component/ContactForm';
import './App.css';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <Router>
            <header>
                <h1>Fish Sales</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/cart">Cart ({cartItems.length})</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<ProductList addToCart={addToCart} />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
                    <Route path="/contact" element={<ContactForm />} />
                </Routes>
            </main>
            <footer>
                <p>&copy; 2024 Fish Sales</p>
            </footer>
        </Router>
    );
};

export default App;
