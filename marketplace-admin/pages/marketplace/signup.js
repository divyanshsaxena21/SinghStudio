// pages/marketplace/signup.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { signUpWithEmail } from '../../lib/firebase';

const MarketplaceSignup = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      await signUpWithEmail(email, password);
      router.push('/marketplace');
    } catch (err) {
      setError('Error signing up!');
    }
  };

  return (
    <div>
      <h1>Marketplace Signup</h1>
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
      <button onClick={handleSignup}>Sign Up</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default MarketplaceSignup;
