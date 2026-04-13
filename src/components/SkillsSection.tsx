
import React, { useState } from 'react';

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };


  const technicalSkills = [
    { id: 1, name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { id: 2, name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { id: 3, name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { id: 4, name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { id: 5, name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { id: 6, name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { id: 7, name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { id: 8, name: 'TensorFlow', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { id: 9, name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Leadership',
    'Time Management',
    'Adaptability',
    'Creativity',
    'Critical Thinking',
  ];

  const education = [
    { degree: 'B.Tech in AIML', institution: 'RVS Technical Campus', year: '2022 - Present' },
    { degree: 'Class 12 (12th)', institution: 'Your School Name', year: '2021' },
    { degree: 'Class 10 (10th)', institution: 'Your School Name', year: '2019' },
  ];

  const certificates = [
    'AWS Certified Cloud Practitioner',
    'Google Cloud Essentials',
    'Machine Learning Specialization - Coursera',
    'Full Stack Web Development Bootcamp',
  ];

  const internships = [
    { company: 'Tech Company Name', role: 'ML Intern', duration: '2-3 Months' },
    { company: 'Web Development Startup', role: 'Frontend Developer Intern', duration: '3 Months' },
  ];

  const getTitle = () => {
    switch (activeTab) {
      case 'softskills': return 'Soft Skills';
      case 'education': return 'Education';
      case 'certificates': return 'Certificates';
      case 'internships': return 'Internships';
      default: return 'Skills';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <div className="row justify-content-center">
            {technicalSkills.map(skill => (
              <div key={skill.id} className="col-lg-2 col-md-3 col-sm-4 mb-4">
                <div className="card card-hover h-100 border-0 shadow text-center">
                  <img src={skill.image} alt={skill.name} className="card-img-top mx-auto mt-4" style={{ width: '60px', height: '60px' }} />
                  <div className="card-body">
                    <h6 className="card-title">{skill.name}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'softskills':
        return (
          <div className="row justify-content-center">
            {softSkills.map((skill, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="card card-hover h-100 border-0 shadow text-center">
                  <div className="card-body">
                    <h6 className="card-title">{skill}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'education':
        return (
          <div className="row justify-content-center">
            {education.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="card card-hover h-100 border-0 shadow">
                  <div className="card-body">
                    <h5 className="card-title">{item.degree}</h5>
                    <p className="card-text">{item.institution}</p>
                    <p className="card-text"><small className="text-muted">{item.year}</small></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'certificates':
        return (
          <div className="row justify-content-center">
            {certificates.map((cert, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="card card-hover h-100 border-0 shadow text-center">
                  <div className="card-body">
                    <h5 className="card-title">{cert}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'internships':
        return (
          <div className="row justify-content-center">
            {internships.map((intern, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="card card-hover h-100 border-0 shadow">
                  <div className="card-body">
                    <h5 className="card-title">{intern.role}</h5>
                    <p className="card-text">{intern.company}</p>
                    <p className="card-text"><small className="text-muted">{intern.duration}</small></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-light py-5 px-4" id="skills">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-5 font-weight-light mb-3">{getTitle()}</h1>
        </div>

        <div className="text-center mb-5">
          <button
            className={`project-btn btn btn-secondary p-2 px-4 mx-2 mb-2 rounded-pill ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => handleTabClick('skills')}
          >
            Technical Skills
          </button>
          <button
            className={`project-btn btn btn-secondary p-2 px-4 mx-2 mb-2 rounded-pill ${activeTab === 'softskills' ? 'active' : ''}`}
            onClick={() => handleTabClick('softskills')}
          >
            Soft Skills
          </button>
          <button
            className={`project-btn btn btn-secondary p-2 px-4 mx-2 mb-2 rounded-pill ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => handleTabClick('education')}
          >
            Education
          </button>
          <button
            className={`project-btn btn btn-secondary p-2 px-4 mx-2 mb-2 rounded-pill ${activeTab === 'certificates' ? 'active' : ''}`}
            onClick={() => handleTabClick('certificates')}
          >
            Certificates
          </button>
          <button
            className={`project-btn btn btn-secondary p-2 px-4 mx-2 mb-2 rounded-pill ${activeTab === 'internships' ? 'active' : ''}`}
            onClick={() => handleTabClick('internships')}
          >
            Internships
          </button>
        </div>

        {renderContent()}
      </div>
    </section>
  );
};

export default SkillsSection;