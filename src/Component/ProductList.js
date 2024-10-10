// src/ProductList.js
// import React from 'react';

// const products = [
//     { id: 1, name: 'Salmon', price: '$10.00' },
//     { id: 2, name: 'Tuna', price: '$12.00' },
//     { id: 3, name: 'Trout', price: '$8.00' },
// ];

// const ProductList = ({ addToCart }) => {
//     return (
//         <div className="product-list">
//             {products.map(product => (
//                 <div key={product.id} className="product">
//                     <h3>{product.name}</h3>
//                     <p>Price: {product.price}</p>
//                     <button onClick={() => addToCart(product)}>Add to Cart</button>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ProductList;
// src/ProductList.js
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
                   <h3>{product.name}</h3>
                   <p>Price: {product.price}</p>
                   <button onClick={() => addToCart(product)}>Add to Cart</button>
               </div>
           ))}
       </div>
   );
};

export default ProductList;

