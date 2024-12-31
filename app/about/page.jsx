import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">About TV Manager</h1>
          <p className="text-gray-600 text-lg">
            TV Manager is an intuitive platform that allows administrators to manage digital signage on TVs in real-time. With its simple and efficient interface, users can upload, organize, and display content seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-blue-600 mb-4">Real-Time Content Management</h2>
            <p className="text-gray-600">
              Manage your TV content effortlessly with real-time updates. The platform ensures that your content stays synchronized and ready to display.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-blue-600 mb-4">Responsive and User-Friendly</h2>
            <p className="text-gray-600">
              Designed with simplicity in mind, our platform provides a seamless user experience on both desktop and mobile devices.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-blue-600 mb-4">Secure and Reliable</h2>
            <p className="text-gray-600">
              Built with top-notch security practices, TV Manager ensures the safety and reliability of your data.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-blue-600 mb-4">Scalable Architecture</h2>
            <p className="text-gray-600">
              Our platform is designed to scale with your needs, making it perfect for both small businesses and large enterprises.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
