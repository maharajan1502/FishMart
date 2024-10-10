
import React, { useEffect, useState } from 'react';

const ProductList = ({ addToCart }) => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
       const fetchProducts = async () => {
           const response = await fetch('http://localhost:5000/api/products');
           const data = await response.json();
           setProducts(data);
       };
       fetchProducts();
   }, []);

   return (
       <div className="product-list">
           {products.map(product => (
               <div key={product.id} className="product">
                   <h3 style={{justifyContent:'space-between'}}>{product.name}</h3>
                   <img className='fishimage' src={product.url}></img>
                   <p>Price: {product.price}</p>
                   <button onClick={() => addToCart(product)}>Add to Cart</button>
               </div>
           ))}
       </div>
   );
};

export default ProductList;
