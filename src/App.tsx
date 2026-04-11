import React from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <SkillsSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;