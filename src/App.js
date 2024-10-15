import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import './App.css';

const App = () => {
    const [cart, setCart] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Initial login state is set to false

    // UseEffect to check for logged-in status in localStorage on first render
    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loggedInStatus); // Set login state based on localStorage
    }, []);

    // Add to cart function
    const addToCart = (product, quantity) => {
        setCart((prevCart) => [...prevCart, { ...product, quantity }]);
    };

    // Remove from cart function
    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    // Handle login and update localStorage
    const handleLogin = () => {
        setIsLoggedIn(true);               // Set isLoggedIn to true on login
        localStorage.setItem('isLoggedIn', 'true');  // Optionally store in localStorage
    };

    // Handle logout and update localStorage
    const handleLogout = () => {
        setIsLoggedIn(false);              // Set isLoggedIn to false on logout
        localStorage.removeItem('isLoggedIn');  // Remove from localStorage if used
    };

    return (
        <Router>
            {/* Header is rendered on all pages */}
            <Header cartCount={cart.length} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            
            <Routes>
                {/* Home route to show product list */}
                <Route 
                    path="/" 
                    element={
                        <ProductList 
                            addToCart={addToCart} 
                            isLoggedIn={isLoggedIn}  // Pass isLoggedIn (optional)
                        />
                    } 
                />

                {/* Cart route to show cart items */}
                <Route 
                    path="/cart" 
                    element={
                        <Cart 
                            cartItems={cart} 
                            removeFromCart={removeFromCart} 
                            isLoggedIn={isLoggedIn} 
                            onLogin={handleLogin}  // Pass handleLogin to Cart
                        />
                    } 
                />

                {/* Login route */}
                <Route 
                    path="/login" 
                    element={<Login onLogin={handleLogin} />} 
                /> 

                {/* Create Account route */}
                <Route 
                    path="/create-account" 
                    element={<CreateAccount />} 
                />
            </Routes>
        </Router>
    );
};

export default App;
