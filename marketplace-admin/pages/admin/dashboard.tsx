// pages/admin/dashboard.tsx

'use client'; // Ensure this component runs on the client side

import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';

const AdminDashboard = () => {
  const { user } = useAuth(); // Get user from context
  const router = useRouter();

  useEffect(() => {
    // Redirect if user is not logged in or is not an admin
    if (!user || user.role !== 'admin') {
      router.push('/admin/login');
    }
  }, [user, router]); // Dependency array ensures effect runs when user changes

  // Render loading state while checking authentication
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user?.email}</p>
      
      {/* Link to Add Product page */}
      <button onClick={() => router.push('/admin/add-product')}>Add New Product</button>
    </div>
  );
};

export default AdminDashboard;
