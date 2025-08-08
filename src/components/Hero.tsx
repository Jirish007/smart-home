import React from 'react';
import heroBg from '../assets/hero.webp';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="text-white text-center py-5"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container py-5">
        <h1 className="display-4 fw-bold">Smart Solutions for Modern Homes</h1>
        <p className="lead">
          Reliable automation, enhanced security, and complete control — all in one place.
        </p>
        <a href="#services" className="btn btn-primary btn-lg mt-3">
          <i className="bi bi-lightning-fill me-2"></i>Explore Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
