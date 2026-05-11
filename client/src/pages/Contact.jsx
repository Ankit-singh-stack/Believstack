import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await axios.post('http://localhost:5000/api/contact', form);
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Failed to send. Please try again.');
    }
  };

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="text-5xl font-black tracking-tighter text-gradient">Let's Build Something Great</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Ready to take your project to the next level? Get in touch with our team of experts and let's discuss how we can help you achieve your goals.
          </p>
          
          <div className="space-y-6 pt-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-2xl">📍</div>
              <div>
                <div className="text-white font-bold">Our Headquarters</div>
                <div className="text-gray-400">123 Tech Avenue, Silicon Valley</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-2xl">📧</div>
              <div>
                <div className="text-white font-bold">Email Us</div>
                <div className="text-gray-400">hello@believstack.com</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-2xl">📞</div>
              <div>
                <div className="text-white font-bold">Call Us</div>
                <div className="text-gray-400">+1 (555) 000-0000</div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-10 rounded-3xl border border-white/10 relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="John Doe" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-primary transition-colors"
                value={form.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="john@example.com" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-primary transition-colors"
                value={form.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Your Message</label>
              <textarea 
                name="message" 
                rows="4"
                placeholder="Tell us about your project..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-primary transition-colors resize-none"
                value={form.message} 
                onChange={handleChange} 
                required 
              />
            </div>
            <button 
              type="submit" 
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-brand-primary/20"
            >
              Send Message
            </button>
          </form>
          {status && (
            <div className={`mt-6 p-4 rounded-2xl text-center font-bold ${status.includes('successfully') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
