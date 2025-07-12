// components/ProductCard.tsx

import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, onAddToCart }) => {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={onAddToCart} style={styles.button}>
        Add to Cart
      </button>
    </div>
  );
};

const styles: { card: React.CSSProperties; button: React.CSSProperties } = {
  card: {
    border: '1px solid #ddd',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center', // 'center' is a valid value here
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default ProductCard;
