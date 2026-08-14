import React, { useState } from 'react';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw0HBRIFPH9B38xMXiErcFjrecboZt_HG7C8AY9Q2jOH6cBfGT-OWVektNd7-ocHwib/exec';

const Contact = () => {
  const initialFormState = { name: '', email: '', phone: '', city: '', message: '' };
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
      if (digitsOnly.length === 10 && errorMessage.includes('10')) {
        setErrorMessage('');
      }
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanPhone = formData.phone.trim().replace(/\D/g, '');

    if (cleanPhone.length < 10) {
      setErrorMessage('Phone number must be exactly 10 digits (less than 10 entered).');
      return;
    }

    if (cleanPhone.length > 10) {
      setErrorMessage('Phone number must be exactly 10 digits (more than 10 entered).');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Build form payload for Google Apps Script
      const params = new URLSearchParams();
      params.append('formType', 'Contact Inquiry');
      params.append('FormType', 'Contact Inquiry');
      params.append('name', formData.name.trim());
      params.append('Name', formData.name.trim());
      params.append('email', formData.email.trim());
      params.append('Email', formData.email.trim());
      params.append('phone', cleanPhone);
      params.append('Phone', cleanPhone);
      params.append('city', formData.city.trim());
      params.append('City', formData.city.trim());
      params.append('message', formData.message.trim());
      params.append('Message', formData.message.trim());
      params.append('course', 'General Contact Inquiry');
      params.append('Course', 'General Contact Inquiry');
      params.append('timestamp', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));

      // Send to Google Sheets web app (no-cors mode to handle Google redirect safely)
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
      });

      setSubmittedName(formData.name);
      setIsSubmitted(true);
      setFormData(initialFormState);
    } catch (err) {
      console.error('Error submitting contact inquiry to Google Sheets:', err);
      setErrorMessage('Failed to send message. Please check your connection or contact us directly on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setErrorMessage('');
    setFormData(initialFormState);
  };

  return (
    <div className="contact-page pt-5 mt-4">
      {/* HEADER BANNER */}
      <section className="py-5 text-center bg-dark border-bottom border-secondary">
        <div className="container py-3">
          <div className="hero-tagline-badge mb-3">
            <span>We're Here to Help</span>
          </div>
          <h1 className="display-4 fw-extrabold text-white mb-3">Get in Touch</h1>
          <p className="fs-5   mx-auto" style={{ maxWidth: '650px' }}>
            Have questions about our AI courses, enterprise team training, or curriculum? Send us a message and our team will respond within 2 hours.
          </p>
        </div>
      </section>

      {/* FORM & INFO SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Contact Details */}
            <div className="col-lg-5">
              <div className="glass-panel p-4 p-md-5 h-100">
                <h3 className="fw-bold text-white mb-4">Contact Information</h3>
                <p className="  mb-4">
                  Whether you're an individual learner looking to accelerate your AI skills or an enterprise team seeking custom training, we're ready to assist.
                </p>

                <div className="d-flex flex-column gap-4 mb-4">
                  <div className="d-flex align-items-start gap-3">
                    <div className="p-3 bg-dark rounded-circle border border-secondary">
                      <i className="bi bi-envelope-fill text-lime fs-5" style={{ color: '#d2fb52' }}></i>
                    </div>
                    <div>
                      <span className="  small d-block">Email</span>
                      <strong className="text-white fs-6">management@automindsacademy.in </strong>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div className="p-3 bg-dark rounded-circle border border-secondary">
                      <i className="bi bi-whatsapp fs-5" style={{ color: '#25D366' }}></i>
                    </div>
                    <div>
                      <span className="small d-block text-white-50">Phone / WhatsApp</span>
                      <a href="https://wa.me/918999442393?text=Welcome%20to%20Auto%20Minds%20Academy" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none fw-bold fs-6 d-inline-flex align-items-center gap-2 hover-lime">
                        +91 8999442393
                        <i className="bi bi-box-arrow-up-right small text-lime"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-top border-secondary">
                  <h6 className="text-white fw-bold mb-3">Live Mentor Hours</h6>
                  <p className="  small mb-0">Monday – Friday: 8:00 AM – 8:00 PM </p>
                  <p className="  small mb-0">Saturday – Sunday: 10:00 AM – 6:00 PM </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="glass-panel p-4 p-md-5">
                <h3 className="fw-bold text-white mb-4">Send Us a Message</h3>

                {isSubmitted ? (
                  <div className="bg-dark p-4 rounded-3 border border-success text-center py-5">
                    <i className="bi bi-check-circle-fill text-lime display-3 d-block mb-3" style={{ color: '#d2fb52' }}></i>
                    <h4 className="text-white fw-bold">Message Received!</h4>
                    <p className="  mb-4">Thank you for reaching out, {submittedName || 'there'}. An Autominds advisor will reply shortly.</p>
                    <button onClick={handleResetForm} className="btn btn-lime rounded-pill px-4">
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {errorMessage && (
                      <div className="alert alert-danger py-2 small mb-3 border-0 bg-danger bg-opacity-25 text-white">
                        <i className="bi bi-exclamation-triangle-fill me-2 text-danger"></i>
                        {errorMessage}
                      </div>
                    )}

                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label small">Full Name <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          name="name"
                          className="form-control bg-dark border-secondary text-white"
                          placeholder="e.g. Sarah Jenkins"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small">Email Address <span className="text-danger">*</span></label>
                        <input
                          type="email"
                          name="email"
                          className="form-control bg-dark border-secondary text-white"
                          placeholder="sarah@company.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <label className="form-label small mb-0">
                            Mobile No <span className="text-danger">*</span>
                          </label>
                          {formData.phone && (
                            <span 
                              className={`small ${formData.phone.length === 10 ? 'text-lime' : 'text-warning'}`}
                              style={{ fontSize: '0.75rem' }}
                            >
                              {formData.phone.length}/10 digits
                            </span>
                          )}
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          inputMode="numeric"
                          maxLength={10}
                          pattern="[0-9]{10}"
                          className="form-control bg-dark border-secondary text-white"
                          placeholder="10-digit mobile number"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small">City <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          name="city"
                          className="form-control bg-dark border-secondary text-white"
                          placeholder="e.g. Mumbai, Pune"
                          required
                          value={formData.city}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label small">Message <span className="text-danger">*</span></label>
                        <textarea
                          rows="4"
                          name="message"
                          className="form-control bg-dark border-secondary text-white"
                          placeholder="How can we help you learn AI fast?"
                          required
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div className="col-12 pt-2">
                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="btn-lime w-100 justify-content-center py-3 fs-5 rounded-pill border-0 fw-bold"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Sending Message...
                            </>
                          ) : (
                            <>
                              Send Message <i className="bi bi-send-fill ms-2"></i>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-5 border-top border-secondary bg-dark">
        <div className="container max-w-3xl">
          <div className="text-center mb-5">
            <span className="hero-tagline-badge">Common Questions</span>
            <h2 className="display-6 fw-bold text-white">Frequently Asked Questions</h2>
          </div>

          <div className="accordion accordion-flush" id="faqAccordion">
            <div className="accordion-item glass-panel border border-secondary mb-3 rounded-3 overflow-hidden">
              <h2 className="accordion-header">
                <button className="accordion-button bg-dark text-white fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  What is AI?

                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body bg-black text-light  small">
                  Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. AI is a broad term that refers to the ability of computing systems to learn, reason, and self-correct based on data. AI systems can be trained to recognize patterns, draw conclusions, and provide insights that would be too complex or time-consuming for humans to detect. AI is used in many different industries, such as healthcare, finance, and robotics. AI is not just a text generator. You can also use it to generate ideas and support various areas in the field of website development.
                </div>
              </div>
            </div>

            <div className="accordion-item glass-panel border border-secondary mb-3 rounded-3 overflow-hidden">
              <h2 className="accordion-header">
                <button className="accordion-button bg-dark text-white fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  Are the course certificates industry recognized?
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body bg-black  text-light small">
                  Yes, upon finishing course projects and code evaluations, you earn a verifiable Autominds AI Skill Certification that can be shared directly on LinkedIn or embedded in your portfolio.
                </div>
              </div>
            </div>

            <div className="accordion-item glass-panel border border-secondary mb-3 rounded-3 overflow-hidden">
              <h2 className="accordion-header">
                <button className="accordion-button bg-dark text-white fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  How long do I have access to course materials?
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body bg-black text-light  small">
                  You get lifetime access to all course lectures, code templates, vector database notebooks, and monthly curriculum updates.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
