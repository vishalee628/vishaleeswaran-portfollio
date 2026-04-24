
import React, { useState } from 'react';
import { projects } from '../data/projectsData';

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <section className="py-5 px-4 bg-light" id="Projects">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 font-weight-light mb-3">Projects</h2>
          <p className="lead mb-5">My recent work showcase</p>
        </div>
       
        <div className="row">
          {filteredProjects.map(project => (
            <div key={project.id} className="col-lg-4 col-md-6 mb-4 col-sm-6 project-item">
              <div className="card card-hover h-100 border-0 shadow">
                <img src={project.image} className="card-img-top mx-auto  rounded project-img" alt={project.title} />
                <div className="card-body text-center">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.urls} className="btn btn-dark btn-hover w-100 rounded-pill" target='blank'>View Project</a>
                  
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

