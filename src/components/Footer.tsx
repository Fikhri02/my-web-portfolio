import type React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">© 2023 Your Name. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            LinkedIn
          </a>
          <a href="#" className="hover:text-gray-300">
            GitHub
          </a>
          <a href="#" className="hover:text-gray-300">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
