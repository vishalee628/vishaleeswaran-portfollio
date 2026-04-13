
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'AboutMe', 'Projects', 'Contact'];
      const scrollPos = window.scrollY + 70;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-2">
      <div className="container">
        <a className="navbar-brand font-weight-bold fs-3" href="#home">Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-2">
              <a className={`nav-link px-3 py-2 ${activeSection === 'home' ? 'active' : ''}`} href="#home">Home</a>
            </li>
            <li className="nav-item mx-2">
              <a className={`nav-link px-3 py-2 ${activeSection === 'skills' ? 'active' : ''}`} href="#skills">Skills</a>
            </li>
            <li className="nav-item mx-2">
              <a className={`nav-link px-3 py-2 ${activeSection === 'AboutMe' ? 'active' : ''}`} href="#AboutMe">About Me</a>
            </li>
            <li className="nav-item mx-2">
              <a className={`nav-link px-3 py-2 ${activeSection === 'Projects' ? 'active' : ''}`} href="#Projects">Projects</a>
            </li>
            <li className="nav-item mx-2">
              <a className={`nav-link px-3 py-2 ${activeSection === 'Contact' ? 'active' : ''}`} href="#Contact">Contact</a>
            </li>
          </ul>
          <a href="#Contact" className="btn btn-light px-4 rounded-pill">Hire Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;