<<<<<<< HEAD
import { useState, type FC } from 'react';

const ProjectsSection: FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    { id: 1, category: 'ml', title: 'Object Detection', description: 'Real-time object detection using advanced computer vision techniques', image: './img/project1.png' },
=======
import React, { useState } from 'react';

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    { id: 1, category: 'ml', title: 'Object Detection', description: 'Real-time object detection using advanced computer vision techniques', image: './img/OIP.jpeg' },
>>>>>>> 8f37bcfa88aa68e17dff2129dfdfc42da5c6b98a
    { id: 2, category: 'ml', title: 'Leaf Disease Prediction', description: 'ML model for agricultural plant disease identification', image: './img/OIP (1).jpeg' },
    { id: 3, category: 'ml', title: 'Vehicle Detection', description: 'Advanced vehicle detection and tracking system', image: './img/OIP (2).jpeg' },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <section className="py-5 px-4 bg-light" id="Projects">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 font-weight-light mb-3">Projects</h2>
          <p className="lead mb-5">My recent work showcase</p>
        </div>
        <div className="text-center mb-5">
          <button
            className={`project-btn btn btn-secondary p-2 px-4 mx-2 mb-2 rounded-pill ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`project-btn btn btn-secondary p-2 px-4 mx-2 mb-2 rounded-pill ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web
          </button>
          <button
            className={`project-btn btn btn-secondary p-2 px-4 mx-2 mb-2 rounded-pill ${filter === 'ml' ? 'active' : ''}`}
            onClick={() => setFilter('ml')}
          >
            ML
          </button>
          <button
            className={`project-btn btn btn-secondary p-2 px-4 mx-2 mb-2 rounded-pill ${filter === 'uiux' ? 'active' : ''}`}
            onClick={() => setFilter('uiux')}
          >
            UI/UX
          </button>
        </div>
        <div className="row">
          {filteredProjects.map(project => (
            <div key={project.id} className="col-lg-4 col-md-6 mb-4 project-item">
              <div className="card card-hover h-100 border-0 shadow">
                <img src={project.image} className="card-img-top mx-auto mt-3 rounded project-img" alt={project.title} />
                <div className="card-body text-center">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href="#" className="btn btn-dark btn-hover w-100 rounded-pill">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

