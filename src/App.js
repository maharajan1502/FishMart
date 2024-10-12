import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import './App.css';

const App = () => {
    const [cart, setCart] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const products = [
        { id: 1, name: 'Salmon', price: 10 },
        { id: 2, name: 'Tuna', price: 15 },
        { id: 3, name: 'Trout', price: 12 },
    ];

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        if (loggedInStatus === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const addToCart = (product, quantity) => {
        setCart([...cart, { ...product, quantity }]);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
    };

    return (
        <Router>
            <Header cartCount={cart.length} />
            <Routes>
                <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
                <Route 
                    path="/cart" 
                    element={<Cart cartItems={cart} removeFromCart={removeFromCart} isLoggedIn={isLoggedIn} onLogin={handleLogin} />} 
                />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} /> {/* Optional: Keep it for account creation */}
            </Routes>
        </Router>
    );
};

export default App;
