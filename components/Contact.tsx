
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) newErrors.email = 'Valid email required';
    if (!formData.message.trim() || formData.message.length < 10) newErrors.message = 'Message too short';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-32 bg-dark-bg border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-xs font-bold text-electric-orange uppercase tracking-[0.4em]">Start a Conversation</h2>
              <h3 className="text-5xl font-display font-bold">Let’s talk <span className="text-electric-orange">Serious</span> Business</h3>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                Let’s talk ideas, roadmaps, or that app you’ve been thinking about for months. I turn concepts into engineering realities.
              </p>
            </div>
            
            <div className="space-y-8">
              <a href="mailto:mojapelot2@gmail.com" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-card-bg border border-white/5 flex items-center justify-center text-electric-orange group-hover:bg-electric-orange group-hover:text-white transition-all duration-500">
                  <Mail size={28} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Direct Email</div>
                  <div className="text-2xl font-display font-bold">mojapelot2@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="p-12 rounded-[2.5rem] bg-card-bg border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-electric-orange to-transparent animate-glow-line"></div>
            {isSuccess ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle className="mx-auto text-green-500" size={48} />
                <h4 className="text-2xl font-bold">Message Sent!</h4>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-8 py-5 bg-charcoal/50 border border-white/5 rounded-2xl text-white focus:border-electric-orange outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-8 py-5 bg-charcoal/50 border border-white/5 rounded-2xl text-white focus:border-electric-orange outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-8 py-5 bg-charcoal/50 border border-white/5 rounded-2xl text-white focus:border-electric-orange outline-none resize-none" />
                </div>
                <button type="submit" className="w-full py-6 bg-electric-orange text-white font-bold rounded-2xl hover:bg-orange-600 transition-all">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
