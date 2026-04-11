import React from 'react';

const ContactSection: React.FC = () => {
  return (
  <section className="py-5 px-4" id="Contact">
        <div className="container">
            <div className="text-center mb-5">
                <h1 className="display-4 font-weight-light mb-4">Contact</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <form>
                        <div className="row g-3 mb-4">
                            <div className="col-md-6">
                                <input type="text" className="form-control form-control-lg rounded-pill px-4 py-3" placeholder="Name" id="Name" />
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control form-control-lg rounded-pill px-4 py-3" placeholder="Email" id="Email" />
                            </div>
                        </div>
                        <div className="row g-3 mb-4">
                            <div className="col-md-6">
                                <input type="tel" className="form-control form-control-lg rounded-pill px-4 py-3" placeholder="Phone Number" id="PhoneNumber" />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control form-control-lg rounded-pill px-4 py-3" placeholder="Service of Interest" id="Service-of-Interest" />
                            </div>
                        </div>
                        <div className="row g-3 mb-4">
                            <div className="col-md-6">
                                <input type="text" className="form-control form-control-lg rounded-pill px-4 py-3" placeholder="Timeline" id="Timeline" />
                            </div>
                            <div className="col-md-6">
                                <textarea className="form-control form-control-lg rounded-3 px-4 py-3" rows={3} placeholder="Message" id="Message"></textarea>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="contact-btn px-5 py-3 fs-4">Send Message</button>
                        </div>
                    </form>



                </div>
            </div>
        </div>
    </section>
  );
};

export default ContactSection;