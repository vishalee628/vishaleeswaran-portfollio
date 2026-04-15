import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  // ⚠️ UPDATE THIS WITH YOUR WHATSAPP NUMBER (format: 919876543210)
  const WHATSAPP_NUMBER = "916380792722";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const sendToWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, phone, service, message } = formData;

    if (!name || !email || !message) {
      alert('Please fill in all required fields');
      return;
    }

    const text = `
Hello! I'm reaching out regarding your services.

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
${service ? `*Service of Interest:* ${service}` : ''}
*Message:* ${message}
    `;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section className="py-5 px-4" id="Contact">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 font-weight-light mb-4">Contact</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form onSubmit={sendToWhatsApp}>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <input 
                    type="text" 
                    className="form-control form-control-lg rounded-pill px-4 py-3" 
                    placeholder="Name" 
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input 
                    type="email" 
                    className="form-control form-control-lg rounded-pill px-4 py-3" 
                    placeholder="Email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <input 
                    type="tel" 
                    className="form-control form-control-lg rounded-pill px-4 py-3" 
                    placeholder="Phone Number" 
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <input 
                    type="text" 
                    className="form-control form-control-lg rounded-pill px-4 py-3" 
                    placeholder="Service of Interest" 
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row g-3 mb-4">
                <div className="col-12">
                  <textarea 
                    className="form-control form-control-lg rounded-3 px-4 py-3" 
                    rows={3} 
                    placeholder="Message" 
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="contact-btn px-5 py-3 fs-4">Send Message on WhatsApp</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;