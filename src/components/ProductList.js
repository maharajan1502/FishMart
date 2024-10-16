import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductList = ({ addToCart, isLoggedIn}) => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const productRefs = useRef([]); // To keep references to each product element
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setProducts(data);

      const initialQuantities = data.reduce((acc, product) => {
        acc[product.id] = 0;
        return acc;
      }, {});
      setQuantities(initialQuantities);
    };

    fetchProducts();
  }, []);

  // Set up Intersection Observer to animate products when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Add animation class when in view
            observer.unobserve(entry.target); // Stop observing the element once it becomes visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    productRefs.current.forEach((product) => {
      if (product) {
        observer.observe(product); // Observe each product
      }
    });

    // Clean up the observer
    return () => {
      productRefs.current.forEach((product) => {
        if (product) observer.unobserve(product);
      });
    };
  }, [products]); // Only run the observer when products are fetched

  const incrementQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const decrementQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(0, prevQuantities[id] - 1),
    }));
  };

  const handleAddToCart = (product) => {
    if (!isLoggedIn) {
      // If user is not logged in, navigate to login page
      alert('You need to log in to add products to the cart.');
      navigate('/login');
    } else {
      const quantity = quantities[product.id];
      if (quantity > 0) {
        addToCart(product, quantity);
      } else {
        alert('Quantity must be greater than 0 to add to cart');
      }
    }
  };

  return (
    <div className="page-container">
      <div className="product-list">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="product"
            ref={(el) => (productRefs.current[index] = el)} // Reference each product
          >
            <h3>{product.name}</h3>
            <img className="fishimage" src={product.url} alt={product.name}></img>
            <p>Price: {product.price}</p>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <pre>Quantity   </pre>
              <button className="decrement" onClick={() => decrementQuantity(product.id)}>-</button>
              <span style={{ margin: '0 10px' }}>{quantities[product.id]}</span>
              <button className="increment" onClick={() => incrementQuantity(product.id)}>+</button>
            </div>

            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(product)}  // Check if user is logged in before adding to cart
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
