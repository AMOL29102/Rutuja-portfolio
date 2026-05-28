import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SectionHeader from './SectionHeader';

export default function Contact() {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };
  
  return (
    <section id="contact" className={`py-24 relative ${dark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Get In Touch" subtitle="Have a question or want to work together?" accent="Contact" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mt-12 p-8 rounded-2xl shadow-xl ${dark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-100'}`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none transition-colors ${
                    dark ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                  } border`}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none transition-colors ${
                    dark ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                  } border`}
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none transition-colors ${
                  dark ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                } border`}
                placeholder="How can I help you?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className={`block text-sm font-medium mb-2 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none transition-colors resize-none ${
                  dark ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                } border`}
                placeholder="Write your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full sm:w-auto px-8 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                status === 'loading'
                  ? 'bg-gray-400 cursor-not-allowed'
                  : status === 'success'
                  ? 'bg-green-500 text-white'
                  : status === 'error'
                  ? 'bg-red-500 text-white'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40'
              }`}
            >
              {status === 'loading' && <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />}
              {status === 'idle' && <><Send size={18} /> Send Message</>}
              {status === 'success' && <><CheckCircle2 size={18} /> Sent Successfully</>}
              {status === 'error' && <><AlertCircle size={18} /> Failed to Send</>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
