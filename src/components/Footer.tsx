import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="py-5 px-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="footer-icons">
              <a href="https://www.linkedin.com/in/vishaleeswaran-k-53579b358" className="mx-2">
                <img src="/public/images/linkedin.svg" alt="Linkedin" className="rounded-circle bg-white p-2" width="45" height="45" />
              </a>
              <a href="https://github.com/vishalee628" className="mx-2">
                <img src="/public/images/github.svg" alt="Github" className="rounded-circle bg-white p-2" width="45" height="45" />
              </a>
              <a href="mailto:vishaleeswaranvishal@gmail.com" className="mx-2">
                <img src="/public/images/gmail.svg" alt="Gmail" className="rounded-circle bg-white px-2" width="45" height="45" />
              </a>
              <a href="https://wa.me/qr/WYCXE6GELSM5G1" className="mx-2">
                <img src="/public/images/whatsapp.svg" alt="Whatsapp" className="rounded-circle bg-white px-2" width="45" height="45" />
              </a>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <p className="mb-1"><a href="#home" className="text-white-50">Home</a></p>
            <p className="mb-1"><a href="#skills" className="text-white-50">Skills</a></p>
            <p className="mb-1"><a href="#AboutMe" className="text-white-50">About</a></p>
            <p className="mb-1"><a href="#Projects" className="text-white-50">Projects</a></p>
            <p><a href="#Contact" className="text-white-50">Contact</a></p>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Services</h5>
            <p className="mb-1"><a href="#" className="text-white-50">Web Technology</a></p>
            <p className="mb-1"><a href="#" className="text-white-50">Machine Learning</a></p>
            <p><a href="#" className="text-white-50">UI/UX Design</a></p>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Contact Info</h5>
            <a href="tel:+91-6380792722" className="mb-1 text-light">+91-6380792722</a>
            <p className="mb-1">Sulur, Coimbatore</p>
            <a href="mailto:vishaleeswaranvishal@gmail.com" className="text-light">vishaleeswaranvishal@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;