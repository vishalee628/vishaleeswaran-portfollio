
import React from 'react';

const AboutSection: React.FC = () => {

  return (
    <section className="py-5 px-4 bg-light" id="AboutMe">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <img src="./public/images/vishaleeswaran.jpeg" alt="Vishaleeswaran" className="vishal img-fluid rounded shadow about-img" />
          </div>
          <div className="col-lg-6">
            <div className="text-center text-lg-left">
              <h2 className="display-4 font-weight-light mb-4">About Me</h2>
              <p className="lead mb-4">Passionate about Machine Learning, Full Stack Development, and Graphic Design.
Skilled in building responsive web applications and creating clean, modern designs.
Strong interest in combining creativity with technology to solve real-world problems.
Continuously improving through hands-on projects and practical learning.
Familiar with modern tools, frameworks, and design principles.
Focused on delivering complete and efficient digital solutions.
</p>
              <a href="./img/Vishaleeswaran Resume.pdf" className="btn about-btn" download>Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;