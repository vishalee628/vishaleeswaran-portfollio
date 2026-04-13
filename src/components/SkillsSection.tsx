<<<<<<< HEAD
import { useState, type FC } from 'react';

const SkillsSection: FC = () => {
=======
import React, { useState } from 'react';

const SkillsSection: React.FC = () => {
>>>>>>> 8f37bcfa88aa68e17dff2129dfdfc42da5c6b98a
  const [activeTab, setActiveTab] = useState('skills');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

<<<<<<< HEAD
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
=======
  const getTitle = () => {
    switch (activeTab) {
      case 'softskills': return 'Soft Skills';
      case 'education': return 'Education';
      case 'certificates': return 'Certificates';
      case 'internships': return 'Internships';
      default: return 'Skills';
    }
  };
>>>>>>> 8f37bcfa88aa68e17dff2129dfdfc42da5c6b98a

  return (
    <section className="bg-light py-5 px-4" id="skills">
      <div className="container">
        <div className="text-center mb-5">
<<<<<<< HEAD
          <h1 className="display-5 font-weight-light mb-3">My Skills</h1>
        </div>
        
        {/* Tab Buttons */}
=======
          <h1 className="display-5 font-weight-light mb-3">{getTitle()}</h1>
        </div>
>>>>>>> 8f37bcfa88aa68e17dff2129dfdfc42da5c6b98a
        <div className="text-center mb-5">
          <button
            className={`project-btn btn btn-secondary p-2 px-4 mx-2 mb-2 rounded-pill ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => handleTabClick('skills')}
          >
<<<<<<< HEAD
            Technical Skills
=======
            Skills
>>>>>>> 8f37bcfa88aa68e17dff2129dfdfc42da5c6b98a
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
<<<<<<< HEAD

        {/* Technical Skills */}
        {activeTab === 'skills' && (
          <div className="row justify-content-center">
            {technicalSkills.map((skill) => (
              <div key={skill.id} className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                <div className="skill-card tool-card">
                  <img src={skill.image} alt={skill.name} className="skill-icon" />
                  <h5 className="skill-name mt-3">{skill.name}</h5>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Soft Skills */}
        {activeTab === 'softskills' && (
          <div className="row justify-content-center">
            {softSkills.map((skill, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="skill-card soft-skill-card">
                  <div className="soft-skill-icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <h5 className="skill-name mt-3">{skill}</h5>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {activeTab === 'education' && (
          <div className="row justify-content-center">
            {education.map((edu, index) => (
              <div key={index} className="col-lg-8 col-md-10 mb-3">
                <div className="education-card">
                  <h5 className="mb-2">{edu.degree}</h5>
                  <p className="mb-1 text-muted">{edu.institution}</p>
                  <p className="text-secondary">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certificates */}
        {activeTab === 'certificates' && (
          <div className="row justify-content-center">
            {certificates.map((cert, index) => (
              <div key={index} className="col-lg-8 col-md-10 mb-3">
                <div className="certificate-card">
                  <div className="certificate-icon">
                    <i className="fas fa-certificate"></i>
                  </div>
                  <h5>{cert}</h5>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Internships */}
        {activeTab === 'internships' && (
          <div className="row justify-content-center">
            {internships.map((internship, index) => (
              <div key={index} className="col-lg-8 col-md-10 mb-3">
                <div className="internship-card">
                  <h5 className="mb-2">{internship.company}</h5>
                  <p className="mb-1"><strong>Role:</strong> {internship.role}</p>
                  <p className="text-secondary"><strong>Duration:</strong> {internship.duration}</p>
                </div>
              </div>
            ))}
          </div>
        )}
=======
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10 mb-4">
            <div className="card card-hover h-100 border-0 shadow">
              <img src="./img/world-wide-web.png" alt="Web Technology" className="card-img-top mx-auto mt-4" style={{ width: '120px', height: '120px' }} />
              <div className="card-body text-center">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">Full Stack Development with modern frameworks and technologies</p>
                <a href="#" className="btn btn-dark btn-hover w-100 rounded-pill">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10 mb-4">
            <div className="card card-hover h-100 border-0 shadow">
              <img src="./img/brainstorming.png" alt="ML" className="card-img-top mx-auto mt-4" style={{ width: '120px', height: '120px' }} />
              <div className="card-body text-center">
                <h5 className="card-title">Machine Learning</h5>
                <p className="card-text">AI models, Deep Learning, Data Science solutions</p>
                <a href="#" className="btn btn-dark btn-hover w-100 rounded-pill">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10 mb-4">
            <div className="card card-hover h-100 border-0 shadow">
              <img src="./img/graphic-design.png" alt="UI/UX" className="card-img-top mx-auto mt-4" style={{ width: '120px', height: '120px' }} />
              <div className="card-body text-center">
                <h5 className="card-title">UI/UX Design</h5>
                <p className="card-text">Modern, responsive and user-friendly designs</p>
                <a href="#" className="btn btn-dark btn-hover w-100 rounded-pill">Read More</a>
              </div>
            </div>
          </div>
        </div>
>>>>>>> 8f37bcfa88aa68e17dff2129dfdfc42da5c6b98a
      </div>
    </section>
  );
};

export default SkillsSection;