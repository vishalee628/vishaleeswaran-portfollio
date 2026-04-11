import React, { useState } from 'react';

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const getTitle = () => {
    switch (activeTab) {
      case 'softskills': return 'Soft Skills';
      case 'education': return 'Education';
      case 'certificates': return 'Certificates';
      case 'internships': return 'Internships';
      default: return 'Skills';
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
            Skills
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
      </div>
    </section>
  );
};

export default SkillsSection;