import React from "react";

const NotFound: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
    <p className="text-lg text-gray-700 mb-8">
      Looks like you’ve followed a broken link or entered a URL that doesn’t exist on this site.
    </p>
    <a href="/" className="text-blue-500 underline">Go back home</a>
  </div>
);

export default NotFound; 