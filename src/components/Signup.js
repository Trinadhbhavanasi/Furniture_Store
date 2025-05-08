import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { backendUrl } from '../config';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendUrl}/api/user/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.success) {
        toast.success('Signup successful! Please login.');
      } else {
        toast.error(data.message || 'Signup failed');
      }
    } catch (err) {
      toast.error('Server error during signup');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={onSubmitHandler} className="bg-white p-8 shadow-md rounded">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border mb-4"
        />
        <button type="submit" className="bg-black text-white w-full py-2">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
