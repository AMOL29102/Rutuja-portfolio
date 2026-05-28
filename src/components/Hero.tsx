import { motion } from 'framer-motion'
import { useState } from 'react'
import { Download, Mail, ChevronDown, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Hero() {
  const { theme } = useTheme()
  const dark = theme === 'dark'
  const [showResume, setShowResume] = useState(false)

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden ${dark ? 'bg-gray-950' : 'bg-gray-50'}`}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: dark
              ? 'linear-gradient(rgba(6,182,212,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.08) 1px, transparent 1px)'
              : 'linear-gradient(rgba(6,182,212,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.12) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none ${dark ? 'bg-cyan-500/5' : 'bg-cyan-200/30'}`} />
      <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none ${dark ? 'bg-blue-500/5' : 'bg-blue-200/30'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0 flex flex-col items-center"
          >
            <div className="relative">
              <div className={`absolute inset-0 rounded-full pulse-ring ${dark ? 'border-2 border-cyan-500/50' : 'border-2 border-cyan-400/60'}`} />
              <div className={`w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden ${dark ? 'border-4 border-cyan-500/40 glow-cyan' : 'border-4 border-cyan-400/50 shadow-xl shadow-cyan-200/40'}`}>
                <img
                  src="/images/Rutu.jpg"
                  alt="Rutuja Gangawane"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-full border border-dashed border-cyan-500/30 pointer-events-none"
              />
              <div className={`absolute -bottom-2 -right-2 px-3 py-1 rounded-full text-xs font-semibold ${dark ? 'bg-cyan-500 text-gray-950' : 'bg-cyan-500 text-white'} shadow-lg`}>
                Open to Work
              </div>
            </div>
          </motion.div>

          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
              className={`text-sm sm:text-base font-mono font-medium mb-3 ${dark ? 'text-cyan-400' : 'text-cyan-600'}`}
            >
              &gt; Hello, World!
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}
            >
              Hi, I'm{' '}
              <span className="gradient-text text-glow">Rutuja Gangawane</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-xl sm:text-2xl font-semibold mb-5 ${dark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Computer Engineering Student &amp; Software Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 ${dark ? 'text-gray-400' : 'text-gray-600'}`}
            >
              Passionate about crafting elegant{' '}
              <strong className={dark ? 'text-cyan-400' : 'text-cyan-600'}>full-stack applications</strong>,
              designing intuitive{' '}
              <strong className={dark ? 'text-blue-400' : 'text-blue-600'}>UI/UX experiences</strong>,
              and building smart{' '}
              <strong className={dark ? 'text-cyan-400' : 'text-cyan-600'}>automation workflows</strong>{' '}
              that make a real-world difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => setShowResume(true)}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6,182,212,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 transition-all"
              >
                <Download size={18} />
                View Resume
              </motion.button>

              <div className="flex items-center gap-3">
                {[
                  { href: 'https://github.com/rutujagangawane', icon: GithubIcon, label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/rutuja-gangawane/', icon: LinkedinIcon, label: 'Rutuja Gangawane | LinkedIn' },
                  { href: 'mailto:rutujagangawane21@gmail.com', icon: null, label: 'Email' },
                ].map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={label}
                    className={`p-2.5 rounded-xl border ${
                      dark
                        ? 'border-gray-700 bg-gray-900 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400'
                        : 'border-gray-200 bg-white text-gray-600 hover:border-cyan-400 hover:text-cyan-600'
                    }`}
                  >
                    {Icon ? <Icon size={20} /> : <Mail size={20} />}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 mt-8 justify-center lg:justify-start"
            >
              {['React', 'Node.js', 'Python', 'MongoDB', 'RPA', 'Figma'].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className={`px-3 py-1 text-xs font-mono rounded-full border ${
                    dark ? 'bg-gray-900 border-gray-700 text-gray-400' : 'bg-white border-gray-200 text-gray-500'
                  }`}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(0,0,0,0.6)' }}
            onClick={() => setShowResume(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`relative rounded-2xl overflow-hidden shadow-2xl ${dark ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'}`}
              style={{ width: '80vw', height: '90vh' }}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 p-4 border-b" style={{ borderColor: dark ? '#111827' : '#f3f4f6' }}>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setShowResume(false)} 
                    className={`p-1.5 rounded-md transition-colors ${dark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-500 hover:text-gray-900'}`}
                  >
                    <X size={18} />
                  </button>
                  <h3 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>Resume — Rutuja Gangawane</h3>
                </div>
                <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition-colors"> <Download size={14} /> Download</a>
              </div>

              <iframe src="/resume.pdf" title="Resume preview" className="w-full h-[calc(100%-56px)]" />
            </motion.div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className={`text-xs font-mono ${dark ? 'text-gray-600' : 'text-gray-400'}`}>scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={18} className={dark ? 'text-gray-600' : 'text-gray-400'} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
