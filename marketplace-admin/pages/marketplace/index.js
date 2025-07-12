// pages/marketplace/index.tsx

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import ProductCard from '../../components/ProductCard';

const Marketplace = () => {
  const { user } = useAuth(); // Get current user (from context)
  
  // Example products data (fetch this from your database or Firestore)
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2' },
    { id: 3, name: 'Product 3', description: 'Description for Product 3' },
  ]);

  return (
    <div>
      <h1>Marketplace</h1>
      <div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            onAddToCart={() => alert(`Added ${product.name} to cart`)}
          />
        ))}
      </div>

      {/* Show "Add Product" button only for admins */}
      {user && user.role === 'admin' && (
        <button onClick={() => alert('Redirect to add product page')}>
          Add New Product
        </button>
      )}
    </div>
  );
};

export default Marketplace;
