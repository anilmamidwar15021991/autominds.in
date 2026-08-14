import React, { useState, useEffect } from 'react';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw0HBRIFPH9B38xMXiErcFjrecboZt_HG7C8AY9Q2jOH6cBfGT-OWVektNd7-ocHwib/exec';

const EnrollModal = ({ isOpen, onClose, batchDetails = {} }) => {
  const initialFormState = {
    name: '',
    phone: '',
    email: '',
    city: '',
    experiencelevel: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSuccess(false);
      setErrorMessage('');
      setFormData(initialFormState);
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Allow only numbers and restrict to max 10 digits
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
      params.append('name', formData.name.trim());
      params.append('Name', formData.name.trim());
      params.append('phone', cleanPhone);
      params.append('Phone', cleanPhone);
      params.append('email', formData.email.trim());
      params.append('Email', formData.email.trim());
      params.append('city', formData.city.trim());
      params.append('City', formData.city.trim());
      params.append('experiencelevel', formData.experiencelevel);
      params.append('ExperienceLevel', formData.experiencelevel);
      params.append('experience_level', formData.experiencelevel);
      params.append('course', batchDetails.courseName || 'Agentic AI Engineering');
      params.append('Course', batchDetails.courseName || 'Agentic AI Engineering');
      params.append('date', batchDetails.date || '16 August 2026');
      params.append('timing', batchDetails.timing || '10:00 AM to 11:00 AM');
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

      setIsSuccess(true);
      setFormData(initialFormState);
    } catch (err) {
      console.error('Error submitting form to Google Sheets:', err);
      setErrorMessage('Failed to submit enrollment. Please check your connection or contact us directly on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="syllabus-modal-overlay enroll-modal-overlay" onClick={onClose}>
      <div
        className="syllabus-modal-container enroll-modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '560px' }}
      >
        {/* Header */}
        <div className="syllabus-modal-header d-flex justify-content-between align-items-start pb-3">
          <div>
            <span className="hero-tagline-badge py-1 px-3 mb-2 d-inline-block">
              <span className="pulse-dot me-1"></span> Live Batch Enrollment
            </span>
            <h3 className="modal-title fw-bold text-white mb-1" style={{ fontSize: '1.45rem' }}>
              {batchDetails.courseName || 'Agentic AI Engineering'}
            </h3>
            <p className="text-white-50 small mb-0">
              📅 <strong>{batchDetails.date || '16 August 2026'}</strong> &nbsp;|&nbsp; ⏰ <strong>{batchDetails.timing || '10:00 AM – 11:00 AM'}</strong>
            </p>
          </div>
          <button
            type="button"
            className="btn-close btn-close-white ms-2"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>

        {/* Modal Body */}
        <div className="p-4 p-md-4">
          {isSuccess ? (
            <div className="text-center py-4">
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-lg"
                style={{
                  width: '72px',
                  height: '72px',
                  background: 'rgba(210, 251, 82, 0.15)',
                  border: '2px solid #d2fb52'
                }}
              >
                <i className="bi bi-check2-circle text-lime" style={{ fontSize: '2.5rem' }}></i>
              </div>
              <h4 className="fw-bold text-white mb-2 font-heading">Enrollment Received!</h4>
              <p className="text-white-50 mb-4 px-2 small" style={{ lineHeight: '1.6' }}>
                Thank you for registering. We have saved your enrollment details for the <strong>{batchDetails.courseName || 'Agentic AI Engineering'}</strong> batch starting on <strong>{batchDetails.date || '16 August 2026'} ({batchDetails.timing || '10:00 AM – 11:00 AM'})</strong>.
                Our team will reach out with session details shortly.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <button
                  type="button"
                  className="btn btn-lime rounded-pill px-4 py-2 fw-semibold"
                  onClick={onClose}
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {errorMessage && (
                <div className="alert alert-danger py-2 small mb-3 border-0 bg-danger bg-opacity-25 text-white">
                  <i className="bi bi-exclamation-triangle-fill me-2 text-danger"></i>
                  {errorMessage}
                </div>
              )}

              <div className="mb-3">
                <label className="form-label text-white small fw-semibold mb-1">
                  Full Name <span className="text-danger">*</span>
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-dark border-secondary text-white-50">
                    <i className="bi bi-person"></i>
                  </span>
                  <input
                    type="text"
                    name="name"
                    className="form-control bg-dark border-secondary text-white shadow-none"
                    placeholder="Enter your full name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <label className="form-label text-white small fw-semibold mb-0">
                    Phone Number (WhatsApp) <span className="text-danger">*</span>
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
                <div className="input-group">
                  <span className="input-group-text bg-dark border-secondary text-white-50">
                    <i className="bi bi-telephone"></i>
                  </span>
                  <input
                    type="tel"
                    inputMode="numeric"
                    name="phone"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    className="form-control bg-dark border-secondary text-white shadow-none"
                    placeholder="Enter 10-digit mobile number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label text-white small fw-semibold mb-1">
                  Email Address <span className="text-danger">*</span>
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-dark border-secondary text-white-50">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="form-control bg-dark border-secondary text-white shadow-none"
                    placeholder="name@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label text-white small fw-semibold mb-1">
                  City <span className="text-danger">*</span>
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-dark border-secondary text-white-50">
                    <i className="bi bi-geo-alt"></i>
                  </span>
                  <input
                    type="text"
                    name="city"
                    className="form-control bg-dark border-secondary text-white shadow-none"
                    placeholder="e.g. Mumbai, Pune, Bangalore"
                    required
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label text-white small fw-semibold mb-1">
                  Experience Level <span className="text-danger">*</span>
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-dark border-secondary text-white-50">
                    <i className="bi bi-briefcase"></i>
                  </span>
                  <select
                    name="experiencelevel"
                    className="form-select bg-dark border-secondary text-white shadow-none"
                    required
                    value={formData.experiencelevel}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select your experience level</option>
                    <option value="Fresher">Fresher</option>
                    <option value="Experienced">Experienced</option>
                    <option value="Career Change">Career Change</option>
                  </select>
                </div>
              </div>

              <div className="d-grid pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-lime w-100 justify-content-center py-3 fs-6 rounded-pill fw-bold border-0 shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Submitting Enrollment...
                    </>
                  ) : (
                    <>
                      Confirm & Enroll Now <i className="bi bi-arrow-right ms-2"></i>
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-white-50 mt-3 mb-0" style={{ fontSize: '0.75rem' }}>
                <i className="bi bi-shield-check text-lime me-1"></i> Your details are safe with us. No spam guarantee.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnrollModal;
