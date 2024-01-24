'use client'
import AdminSidebar from '@/components/AdminSidebar';
// pages/admin.js
import { useState } from 'react';

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      setMessage('Login successful. Welcome, admin!');
      setIsLoggedIn(true);
    } else {
      setMessage('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {!isLoggedIn ? (
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
          <div className="mb-4">
            <label className="block text-gray-700">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
          {message && <p className="text-red-500 mt-2">{message}</p>}
        </div>
      ) : (
        <div className="flex text-center">
          <div>
          <AdminSidebar />
          </div>
          <div>
          <h1 className="text-2xl font-bold mb-4">Welcome, admin!</h1>
          {/* Add your page content here */}
          <p>Your admin content goes here.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
