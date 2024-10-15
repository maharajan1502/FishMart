import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './Cart.css'; // Assuming you're separating styles for better structure

const Cart = ({ cartItems, removeFromCart, isLoggedIn, onLogin }) => {
    const navigate = useNavigate();

    // Handle placing order
    const handlePlaceOrder = () => {
        if (isLoggedIn) {
            alert('Order placed successfully!');
            // Optionally, clear the cart or navigate to a confirmation page
        } else {
            alert('Please log in to place your order.');
            navigate('/login');  // Redirect to login page if not logged in
        }
    };

    // Calculate total for individual items and the grand total
    const calculateTotals = () => {
        let grandTotal = 0;
        return cartItems.map(item => {
            const itemTotal = item.price * item.quantity;
            grandTotal += itemTotal;
            return {
                ...item,
                itemTotal
            };
        }).concat({ grandTotal });
    };

    const updatedCartItems = calculateTotals();

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {updatedCartItems.length === 0 || updatedCartItems[0].grandTotal === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="cart-items">
                        {updatedCartItems.map((item, index) => {
                            // Check if item is the total grand total object
                            if (item.grandTotal !== undefined) {
                                return null; // Skip rendering grand total as an item
                            }
                            return (
                                <li key={item.id} className="cart-item">
                                    <div className="item-details">
                                        <span className="item-name">{item.name}</span>
                                        <span className="item-price">${item.price}</span>
                                        <span className="item-quantity">x {item.quantity}</span>
                                        <span className="item-total">= ${item.itemTotal.toFixed(2)}</span>
                                    </div>
                                    <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="total-amount">
                        <h3>Total Amount: ${updatedCartItems[updatedCartItems.length - 1].grandTotal.toFixed(2)}</h3>
                    </div>
                    <div className="cart-actions">
                        <button className="place-order-button" onClick={handlePlaceOrder}>
                            Place Order
                        </button>
                        {/* Back to Products button */}
                        <button className="back-button" onClick={() => navigate('/')}>
                            Back to Products
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
