import React, { useState } from 'react';
import { Mail, MapPin, Phone, Linkedin, Github, Send, MessageSquare, AlertCircle } from 'lucide-react';
import { PROFILE } from '../data/profile';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required.';
    if (!formData.message.trim()) errs.message = 'Message content is required.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean frontend form submission & feedback
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast('Thank you! Your message has been prepared for dispatch to BAHUWIMBUYE Rédempteur.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-950 text-slate-100 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-sm text-slate-400 font-sans leading-relaxed">
            Available for consulting opportunities, institutional contracts, M&E data positions, and full-time employment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Channels */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Contact Information</h3>
              <p className="text-xs text-slate-400 font-sans mt-1">
                Reach out directly or send a message via the form. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4 text-xs font-sans">
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Primary Location</span>
                  <span className="font-bold text-white text-sm">{PROFILE.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="p-2.5 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Professional Email</span>
                  <a href={`mailto:${PROFILE.contact.email}`} className="font-bold text-white text-xs hover:text-sky-400 transition-colors font-mono">
                    {PROFILE.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Telephone Contact</span>
                  <span className="font-bold text-white text-xs font-mono">{PROFILE.contact.phone}</span>
                </div>
              </div>
            </div>

            {/* Social Links Icons */}
            <div className="pt-4 border-t border-slate-800">
              <span className="text-xs font-mono text-slate-400 block mb-3">Professional Social Networks</span>
              <div className="flex items-center gap-3">
                <a
                  href={PROFILE.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-950 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 border border-slate-800 transition-all"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={PROFILE.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-950 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 border border-slate-800 transition-all"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${PROFILE.contact.email}`}
                  className="p-3 rounded-xl bg-slate-950 text-slate-300 hover:text-teal-400 hover:border-teal-500/40 border border-slate-800 transition-all"
                  title="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={PROFILE.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-950 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 border border-slate-800 transition-all"
                  title="WhatsApp"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
            <h3 className="text-xl font-bold text-white tracking-tight mb-6">Send a Professional Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans" noValidate>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-slate-300 font-medium mb-1.5">
                    Your Name <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Marie Dupont"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-100 focus:outline-none transition-colors ${
                      errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-sky-500'
                    }`}
                  />
                  {errors.name && (
                    <span className="flex items-center gap-1 text-[11px] text-rose-400 mt-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-slate-300 font-medium mb-1.5">
                    Your Email <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. m.dupont@organization.org"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-100 focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-sky-500'
                    }`}
                  />
                  {errors.email && (
                    <span className="flex items-center gap-1 text-[11px] text-rose-400 mt-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-slate-300 font-medium mb-1.5">
                  Subject / Organization Inquiry <span className="text-sky-400">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Data Analysis Consultancy Inquiry"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-100 focus:outline-none transition-colors ${
                    errors.subject ? 'border-rose-500' : 'border-slate-800 focus:border-sky-500'
                  }`}
                />
                {errors.subject && (
                  <span className="flex items-center gap-1 text-[11px] text-rose-400 mt-1 font-mono">
                    <AlertCircle className="w-3 h-3" /> {errors.subject}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-slate-300 font-medium mb-1.5">
                  Detailed Message <span className="text-sky-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, position requirements, or inquiry..."
                  className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-100 focus:outline-none transition-colors ${
                    errors.message ? 'border-rose-500' : 'border-slate-800 focus:border-sky-500'
                  }`}
                ></textarea>
                {errors.message && (
                  <span className="flex items-center gap-1 text-[11px] text-rose-400 mt-1 font-mono">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </span>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-sky-950 transition-transform active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Validating & Transmitting...' : 'Send Message'}</span>
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
