
import React from 'react';

const HomeSection: React.FC = () => {

  return (
    <section className="hero-section text-white py-5 px-4" id="home">
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-lg-6 col-md-12 mx-auto text-center">
            <div className="head-section mb-5">
              <h1 className="display-3 font-weight-light mb-3">Hi I am</h1>
              <h1 className="Home-head display-4 font-weight-bold">Vishaleeswaran</h1>
            </div>
            <div className="icons mb-5 d-flex justify-content-center flex-wrap">
              <a href="https://www.linkedin.com/in/vishaleeswaran-k-53579b358" className="mx-2" target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedin.svg" alt="Linkedin" className="rounded-circle bg-white p-2" width="50" height="50" />
              </a>
              <a href="https://github.com" className="mx-2" target="_blank" rel="noopener noreferrer">
                <img src="/images/github.svg" alt="Github" className="rounded-circle bg-white p-2" width="50" height="50" />
              </a>
              <a href="mailto:vishaleeswaranvishal@gmail.com" className="mx-2">
                <img src="/images/gmail.svg" alt="Gmail" className="rounded-circle bg-white p-2" width="50" height="50" />
              </a>
              <a href="https://wa.me/qr/WYCXE6GELSM5G1" className="mx-2" target="_blank" rel="noopener noreferrer">
                <img src="/images/whatsapp.svg" alt="Whatsapp" className="rounded-circle bg-white p-2" width="50" height="50" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mx-auto text-center hero-image-container">
            <img src="/assets/vishal.png" alt="Vishaleeswaran" className="hero-img img-fluid rounded shadow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;