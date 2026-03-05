import { useState } from 'react';
import { api } from '../api';
import SEO from '../components/SEO';

export default function HireUs() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    website_type: '',
    budget_range: '',
    project_description: '',
    timeline: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');
    try {
      await api.createInquiry(formData);
      setMessage('Thank you! Your inquiry has been submitted successfully.');
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        website_type: '',
        budget_range: '',
        project_description: '',
        timeline: '',
      });
    } catch (err) {
      setMessage('Failed to submit inquiry. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO title="Website Development Inquiry" description="Contact us for custom website development. Fill out our form to get a quote for your project." canonical="https://yourdomain.com/hire-us" />
      <div className="page hire-us-page">
        <section className="page-hero">
          <h1>Website Development Inquiry</h1>
          <p>Let us build your dream website with modern design and technology.</p>
        </section>
        <section className="contact-form-section">
          <div className="container">
            <form onSubmit={handleSubmit} className="contact-form glass-card">
              <div className="form-field">
                <label htmlFor="full_name">Full Name *</label>
                <input type="text" id="full_name" name="full_name" value={formData.full_name} onChange={handleChange} required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label htmlFor="website_type">Type of Website</label>
                <select id="website_type" name="website_type" value={formData.website_type} onChange={handleChange}>
                  <option value="">Select...</option>
                  <option value="static">Static Website</option>
                  <option value="dynamic">Dynamic Website</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="custom">Custom Admin Panel</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="budget_range">Budget Range</label>
                <select id="budget_range" name="budget_range" value={formData.budget_range} onChange={handleChange}>
                  <option value="">Select...</option>
                  <option value="5k-10k">₹5,000 - ₹10,000</option>
                  <option value="10k-25k">₹10,000 - ₹25,000</option>
                  <option value="25k-50k">₹25,000 - ₹50,000</option>
                  <option value="50k+">₹50,000+</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="project_description">Project Description</label>
                <textarea id="project_description" name="project_description" rows={5} value={formData.project_description} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label htmlFor="timeline">Timeline</label>
                <input type="text" id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} placeholder="e.g., 2 weeks, 1 month" />
              </div>
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
              {message && <p className="form-message">{message}</p>}
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
