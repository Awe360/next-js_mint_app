import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">TV Management Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600">Active TVs</h2>
            <p className="text-gray-600 text-lg mt-2">10</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-600">Files Uploaded</h2>
            <p className="text-gray-600 text-lg mt-2">20</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-red-600">Issues Reported</h2>
            <p className="text-gray-600 text-lg mt-2">2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
