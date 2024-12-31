import React from 'react';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Create an Account</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-teal-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-teal-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-teal-400"
              placeholder="Create a Password"
            />
          </div>
          <button className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
