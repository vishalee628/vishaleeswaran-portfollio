<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> 8f37bcfa88aa68e17dff2129dfdfc42da5c6b98a
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