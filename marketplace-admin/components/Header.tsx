// components/Header.tsx

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Singh Studio Dashboard</h1>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link href="/admin/dashboard">Admin Dashboard</Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/marketplace">Marketplace</Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/admin/login">Admin Login</Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/marketplace/login">Marketplace Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '24px',
    margin: 0,
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
  },
  navItem: {
    textDecoration: 'none',
    color: '#fff',
  },
};

export default Header;
