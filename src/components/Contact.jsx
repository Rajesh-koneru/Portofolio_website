import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { email, phone, location } = portfolioData.personalInfo;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear field-specific error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Clear success notification after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-border-color/60">
      <SectionTitle 
        number="07" 
        title="Get In Touch" 
        subtitle="I'm actively seeking software engineering internships. Feel free to reach out to discuss work opportunities or ask questions!" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
        
        {/* Contact details card (Left Column) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-bg-secondary border border-border-color rounded-2xl p-6 shadow-sm">
            <h3 className="font-heading text-lg font-bold text-text-primary mb-2">
              Recruiter-Friendly Coordinates
            </h3>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-6">
              I am open to backend, frontend, and full-stack junior opportunities, based in Hyderabad or open to remote work.
            </p>

            <div className="space-y-4 font-sans text-sm">
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-bg border border-accent/10">
                  <FaEnvelope className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-text-secondary">Email Address</span>
                  <a href={`mailto:${email}`} className="text-text-primary hover:text-accent font-medium font-mono text-xs md:text-sm transition-colors duration-200">
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-bg border border-accent/10">
                  <FaPhoneAlt className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-text-secondary">Phone Number</span>
                  <a href={`tel:${phone}`} className="text-text-primary hover:text-accent font-medium font-mono text-xs md:text-sm transition-colors duration-200">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-bg border border-accent/10">
                  <FaMapMarkerAlt className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-text-secondary">Location</span>
                  <span className="text-text-primary font-medium">
                    {location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form card (Right Column) */}
        <div className="lg:col-span-7">
          <div className="bg-bg-secondary border border-border-color rounded-2xl p-6 shadow-sm">
            <h3 className="font-heading text-lg font-bold text-text-primary mb-4">
              Send Me A Message
            </h3>

            {submitSuccess && (
              <div className="mb-6 rounded-lg bg-green-500/10 border border-green-500/20 p-4 text-sm text-green-600 dark:text-green-400">
                <strong>Success!</strong> Your message has been sent. Rajesh will respond to your inquiry at {email} as soon as possible.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-xs font-bold text-text-secondary uppercase">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-lg border bg-bg-primary px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-accent ${
                      errors.name ? 'border-red-500' : 'border-border-color'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-xs text-red-500 font-semibold">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-xs font-bold text-text-secondary uppercase">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-lg border bg-bg-primary px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-accent ${
                      errors.email ? 'border-red-500' : 'border-border-color'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 font-semibold">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label htmlFor="subject" className="block text-xs font-bold text-text-secondary uppercase">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-bg-primary px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-accent ${
                    errors.subject ? 'border-red-500' : 'border-border-color'
                  }`}
                  placeholder="Opportunity: Software Intern"
                />
                {errors.subject && <p className="text-xs text-red-500 font-semibold">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="message" className="block text-xs font-bold text-text-secondary uppercase">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-bg-primary px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-accent ${
                    errors.message ? 'border-red-500' : 'border-border-color'
                  }`}
                  placeholder="Hi Rajesh, I saw your portfolio and..."
                ></textarea>
                {errors.message && <p className="text-xs text-red-500 font-semibold">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 rounded-lg bg-accent py-2.5 px-4 text-sm font-semibold text-white hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:bg-accent/70 transition-all duration-200 cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center space-x-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                    <span>Sending...</span>
                  </span>
                ) : (
                  <>
                    <FaPaperPlane className="h-3 w-3" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
