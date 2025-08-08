import React from 'react';
import service1 from '../assets/automation.webp';
import service2 from '../assets/security.webp';
import service3 from '../assets/energy.webp';

// Define the shape of a service
interface Service {
  title: string;
  desc: string;
  icon: string;
  img: string;
}

const services: Service[] = [
  {
    title: "Home Automation",
    desc: "Control lights, appliances, and more from anywhere.",
    icon: "bi-toggle-on",
    img: service1
  },
  {
    title: "Smart Security",
    desc: "AI-powered surveillance and remote access control.",
    icon: "bi-shield-lock",
    img: service2
  },
  {
    title: "Energy Management",
    desc: "Track and optimize energy usage in real-time.",
    icon: "bi-battery-charging",
    img: service3
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row">
          {services.map((s, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card h-100">
                <img
                  src={s.img}
                  className="card-img-top"
                  alt={s.title}
                  loading="lazy"
                />
                <div className="card-body text-center">
                  <i className={`bi ${s.icon} fs-1 text-primary mb-3`}></i>
                  <h5 className="card-title">{s.title}</h5>
                  <p className="card-text">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
