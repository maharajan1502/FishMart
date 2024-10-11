import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart, isLoggedIn }) => {
    const navigate = useNavigate(); // useNavigate for programmatic navigation

    // Handle placing order
    const handlePlaceOrder = () => {
        if (isLoggedIn) {
            // Logic to place the order (you can customize this)
            alert('Order placed successfully!');
            // Optionally clear the cart or navigate to a confirmation page
        } else {
            // If not logged in, redirect to the login page
            alert('Please log in to place your order.');
            navigate('/login');
        }
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                {item.name} - {item.price} x {item.quantity}
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>

                    {/* Place Order Button */}
                    <button onClick={handlePlaceOrder}>
                        Place Order
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;
