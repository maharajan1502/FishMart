import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate(); // useNavigate to programmatically navigate

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setProducts(data);

      // Initialize quantities for each product as 0
      const initialQuantities = data.reduce((acc, product) => {
        acc[product.id] = 0; // Default quantity to 0
        return acc;
      }, {});
      setQuantities(initialQuantities);
    };

    fetchProducts();
  }, []);

  // Increment the quantity of the product
  const incrementQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,  // Increment current quantity by 1
    }));
  };

  // Decrement the quantity of the product (ensure it doesn't go below 0)
  const decrementQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(0, prevQuantities[id] - 1),  // Decrement but ensure it's not below 0
    }));
  };

  // Handle adding items to cart
  const handleAddToCart = (product) => {
    const quantity = quantities[product.id];
    if (quantity > 0) {
      addToCart(product, quantity);  // Only add to cart if quantity > 0
    } else {
      alert('Quantity must be greater than 0 to add to cart');
    }
  };

  // Handle clicking "View Cart" button
  const handleViewCart = () => {
    // Filter products that have a quantity greater than 0
    const itemsToAdd = products.filter(product => quantities[product.id] > 0);

    // Add each valid item to the cart with its quantity
    itemsToAdd.forEach(item => {
      addToCart(item, quantities[item.id]);
    });

    // Navigate to cart page
    // navigate('/cart');
  };

  return (
    <div className="page-container">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3 style={{ justifyContent: 'space-between' }}>{product.name}</h3>
            <img className="fishimage" src={product.url} alt={product.name}></img>
            <p>Price: {product.price}</p>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <pre>Quantity   </pre>
              {/* Decrement Button */}
              <button className="decrement" onClick={() => decrementQuantity(product.id)}>-</button>

              {/* Display Quantity */}
              <span style={{ margin: '0 10px' }}>{quantities[product.id]}</span>

              {/* Increment Button */}
              <button className="increment" onClick={() => incrementQuantity(product.id)}>+</button>
            </div>

            {/* Add to Cart Button for this specific product */}
            {/* <button
              className="add-to-cart"
              onClick={() => handleAddToCart(product)}  // Check quantity before adding to cart
            >
              Add to Cart
            </button> */}
          </div>
        ))}
      </div>

      {/* Floating Cart Button */}
      <button className="floating-cart" onClick={handleViewCart}>
        <i className="fas fa-shopping-cart"></i> Add to Cart
      </button>
    </div>
  );
};

export default ProductList;
