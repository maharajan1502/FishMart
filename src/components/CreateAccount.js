import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './CreateAccount.css'; // Assuming you'll create a separate CSS file for styles

const CreateAccount = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Simulate user creation (replace with real backend logic)
        alert('User created successfully!');

        // Optionally navigate to the login page after successful registration
        navigate('/login');
    };

    return (
        <div className="create-account-container">
            <h2>Create New Account</h2>
            <form onSubmit={handleSubmit} className="create-account-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="create-account-button">
                    Create Account
                </button>
            </form>

            <p className="login-redirect">
                Already have an account?{' '}
                <span onClick={() => navigate('/login')} className="login-link">
                    Log in here
                </span>.
            </p>
        </div>
    );
};

export default CreateAccount;
