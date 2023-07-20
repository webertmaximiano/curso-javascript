import React from 'react';
import superWidgetImage from '../assets/logo-redewe2m.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Introducing the Super Widget</h2>
        <p>The ultimate solution for all your needs!</p>
        <a href="#contact" className="cta-btn">Get Started</a>
      </div>
      <div className="hero-image">
        <img src={superWidgetImage} alt="Super Widget" />
      </div>
    </section>
  );
};

export default Hero;
