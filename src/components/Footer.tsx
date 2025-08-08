import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Smart Home Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
