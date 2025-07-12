// components/Footer.tsx

import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Singh Studio. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center' as 'center' | 'left' | 'right' | 'justify', // explicitly defining the string literals for textAlign
  },
};

export default Footer;
