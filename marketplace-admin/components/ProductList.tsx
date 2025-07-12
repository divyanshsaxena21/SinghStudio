// components/ProductList.tsx

'use client'; // Correct syntax for the client directive

import React, { useState, useEffect } from 'react';

const ProductList = () => {
  // Example products data (you will eventually fetch this from Firestore or MongoDB)
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'This is product 1' },
    { id: 2, name: 'Product 2', description: 'This is product 2' },
    { id: 3, name: 'Product 3', description: 'This is product 3' },
  ]);

  return (
    <div style={styles.productList}>
      <h2>Products</h2>
      <ul style={styles.productItems}>
        {products.map((product) => (
          <li key={product.id} style={styles.productItem}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button style={styles.button}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  productList: {
    padding: '20px',
  },
  productItems: {
    listStyle: 'none',
    padding: 0,
  },
  productItem: {
    padding: '10px 0',
    borderBottom: '1px solid #ccc',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default ProductList;
