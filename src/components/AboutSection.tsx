<<<<<<< HEAD
import type { FC } from 'react';

const AboutSection: FC = () => {
=======
import React from 'react';

const AboutSection: React.FC = () => {
>>>>>>> 8f37bcfa88aa68e17dff2129dfdfc42da5c6b98a
  return (
    <section className="py-5 px-4 bg-light" id="AboutMe">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <img src="./img/vishal.png" alt="Vishaleeswaran" className="vishal img-fluid rounded shadow about-img" />
          </div>
          <div className="col-lg-6">
            <div className="text-center text-lg-left">
              <h2 className="display-4 font-weight-light mb-4">About Me</h2>
              <p className="lead mb-4">3rd year AIML student at RVS Technical Campus passionate about Full Stack Development and Machine Learning. Building intelligent, scalable web applications and AI solutions.</p>
              <p className="lead mb-4">Specializing in Deep Learning, Data Science, and modern web technologies to solve real-world problems.</p>
              <a href="./img/Vishaleeswaran Resume.pdf" className="btn about-btn" download>Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;