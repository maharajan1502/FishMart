// src/components/ProductItem.js
import React from 'react';

const ProductItem = ({ product, addToCart }) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;
