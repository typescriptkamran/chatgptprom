// 'use client'  // Assuming this is not needed or already set up

import AdminSidebar from '@/components/AdminSidebar';

// pages/admin.js
const Admin = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogin = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      setMessage('Login successful. Welcome, admin!');
      window.location.reload(); // Refresh the page to show authenticated content
    } else {
      setMessage('Invalid username or password. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    window.location.reload(); // Refresh the page to show the login form
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
              id="username"
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
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
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
