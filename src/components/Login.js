import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Example simple authentication (replace with real logic)
        if (username === 'user' && password === 'password') {
            onLogin(); // This will update the login state in App.js
            alert('Logged in successfully!');
            localStorage.setItem('hasPlacedOrder', 'true')
            localStorage.setItem('hasPlacedOrder', 'true')
            navigate('/cart'); // Redirect back to the cart page after login
        } else {
            alert('Invalid credentials');
        }
    };

    // Navigate to the CreateAccount page
    const handleCreateAccount = () => {
        navigate('/create-account');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="login-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                />
                <button className="login-button" onClick={handleLogin}>
                    Login
                </button>
                
                {/* Link to create a new account */}
                <p className="create-account-text">
                    Don't have an account? 
                    
                    <a onClick={handleCreateAccount} >Create Account</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
