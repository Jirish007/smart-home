import React from 'react';
import aboutImg from '../assets/man-smart.webp';

const About: React.FC = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={aboutImg}
              className="img-fluid rounded shadow"
              alt="About us"
              loading="lazy"
            />
          </div>
          <div className="col-md-6">
            <h2>About Our Company</h2>
            <p>
              With over a decade of experience, Smart Home Services has been at
              the forefront of home automation. We provide cutting-edge
              technologies that make everyday life safer, easier, and more
              efficient.
            </p>
            <p>
              Our mission is to bring affordable, user-friendly smart systems to
              every household, with unmatched support and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
