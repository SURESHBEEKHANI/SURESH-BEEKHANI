import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogAdmin: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Admin</h1>
          <p className="text-lg text-gray-600">Admin panel coming soon...</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogAdmin;
