// pages/marketplace/login.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { signInWithEmail, signInWithGoogle } from '../../lib/firebase';

const MarketplaceLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailLogin = async () => {
    try {
      await signInWithEmail(email, password);
      router.push('/marketplace');
    } catch (err) {
      setError('Invalid credentials!');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      router.push('/marketplace');
    } catch (err) {
      setError('Google authentication failed!');
    }
  };

  return (
    <div>
      <h1>Marketplace Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleEmailLogin}>Login with Email</button>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default MarketplaceLogin;
