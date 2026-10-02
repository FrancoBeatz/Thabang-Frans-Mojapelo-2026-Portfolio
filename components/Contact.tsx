import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import BorderGlow from './effects/BorderGlow';
import DecryptedText from './effects/DecryptedText';
import ClickSpark from './effects/ClickSpark';
import Magnetic from './effects/Magnetic';

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: 'Full-Stack Web App',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) errs.email = "Please enter a valid email address";
    if (!formData.message.trim() || formData.message.length < 8) errs.message = "Please enter your message (at least 8 characters)";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const whatsappNumber = "27723481158";
    const text = `Hello Thabang, my name is ${formData.name}.\nInterest: ${formData.service}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', service: 'Full-Stack Web App', message: '' });
      
      // Launch WhatsApp chat
      window.open(whatsappUrl, '_blank');
      
      setTimeout(() => setIsSuccess(false), 6000);
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-32 relative z-10 border-t border-white/5 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-electric-orange/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-orange/10 border border-electric-orange/20 text-electric-orange text-xs font-bold uppercase tracking-[0.2em]">
            <MessageSquare size={14} />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-tight text-white">
            Let’s Build Something <span className="text-electric-orange">Serious</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Ready to discuss a full-stack web application, custom commercial website, or junior developer position? Reach out directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start max-w-6xl mx-auto">
          
          {/* Contact Direct Info */}
          <div className="space-y-8">
            
            <div className="p-8 rounded-3xl bg-[#0c0e14] border border-white/5 space-y-6">
              <h3 className="text-xl font-display font-bold text-white">Direct Communication</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:mojapelot2@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-electric-orange/30 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-electric-orange/10 text-electric-orange group-hover:bg-electric-orange group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Email Address</div>
                    <div className="text-sm md:text-base font-bold text-white font-mono">mojapelot2@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/27723481158"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-green-500/30 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">WhatsApp Direct</div>
                    <div className="text-sm md:text-base font-bold text-white font-mono">(+27) 072 348 1158</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Location</div>
                    <div className="text-sm md:text-base font-bold text-white">Johannesburg, South Africa (Remote Available)</div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('open-resume-modal'));
                  }}
                  className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white font-bold text-xs md:text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <FileText size={16} className="text-purple-400" />
                  <span>View Verified CV & Certifications</span>
                </button>
              </div>

            </div>

          </div>

          {/* Interactive Form Card */}
          <BorderGlow
            borderRadius={32}
            backgroundColor="#0a0c12"
            colors={['#f97316', '#38bdf8', '#fb923c']}
          >
            <div className="p-8 md:p-12 space-y-6">
              
              {isSuccess ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 size={50} className="text-green-400 mx-auto animate-bounce" />
                  <h4 className="text-2xl font-display font-bold text-white">Message Prepared!</h4>
                  <p className="text-gray-400 text-sm max-w-sm mx-auto">
                    Opening WhatsApp to complete your message transmission directly to Thabang.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase font-bold text-gray-400">Your Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Rivers"
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 focus:border-electric-orange focus:bg-white/[0.06] outline-none transition-all text-sm"
                    />
                    {errors.name && <span className="text-xs text-red-400 font-mono">{errors.name}</span>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase font-bold text-gray-400">Your Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 focus:border-electric-orange focus:bg-white/[0.06] outline-none transition-all text-sm"
                    />
                    {errors.email && <span className="text-xs text-red-400 font-mono">{errors.email}</span>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase font-bold text-gray-400">Project / Engagement Type</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl bg-[#0f121a] border border-white/10 text-white focus:border-electric-orange outline-none transition-all text-sm cursor-pointer"
                    >
                      <option value="Full-Stack Web App">Full-Stack Web Application (MERN)</option>
                      <option value="Business Website">Custom Business Website</option>
                      <option value="Junior Developer Role">Junior Developer Job Opportunity</option>
                      <option value="Frontend Architecture">Frontend / UI/UX Development</option>
                      <option value="Consultation / Other">General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase font-bold text-gray-400">Your Message / Brief</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project requirements, scope, or timeline..."
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 focus:border-electric-orange focus:bg-white/[0.06] outline-none transition-all text-sm resize-none"
                    />
                    {errors.message && <span className="text-xs text-red-400 font-mono">{errors.message}</span>}
                  </div>

                  <ClickSpark sparkColor="#f97316" className="w-full">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 rounded-2xl bg-electric-orange text-white font-extrabold text-sm uppercase tracking-wider hover:bg-orange-600 transition-all duration-300 shadow-xl shadow-electric-orange/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send size={16} />
                      <span>{isSubmitting ? 'Transmitting...' : 'Send Message & Dispatch'}</span>
                    </button>
                  </ClickSpark>
                </form>
              )}

            </div>
          </BorderGlow>

        </div>

      </div>
    </section>
  );
};

export default Contact;
