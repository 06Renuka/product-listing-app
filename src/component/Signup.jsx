

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // For displaying validation errors
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignup = async () => {
    setError(''); // Reset error message

    // Validate email format
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Validate password length
    if (password.length < 6) {
      setError('Password should be at least 6 characters long.');
      return;
    }

    try {
      const response = await axios.post('https://intern-task-api.bravo68web.workers.dev/auth/signup', { email, password });
      alert('Signup Successful');
      navigate('/login'); // Navigate to login page on success
    } catch (error) {
      console.error('Signup Error:', error);
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl mb-4">Signup</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-2 border w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 border w-full"
        />
        <button onClick={handleSignup} className="bg-blue-500 text-white p-2 w-full">Signup</button>
      </div>
    </div>
  );
};

export default Signup;

