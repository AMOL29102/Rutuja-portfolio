import { motion } from 'framer-motion'
import { ExternalLink, Users, ShieldCheck, Clock } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import SectionHeader from './SectionHeader'

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

const projects = [
  {
    name: 'RescueBites',
    tagline: 'Free Food Service Management System',
    description: 'A platform connecting food providers with consumers to reduce food waste. Implements role-based access with JWT authentication and automated 18-hour request expiration.',
    image: '/images/rescuebite.png',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    stack: 'MERN Stack',
    highlights: [
      { icon: Users, text: 'Role-based: Providers & Consumers' },
      { icon: ShieldCheck, text: 'JWT Authentication' },
      { icon: Clock, text: 'Auto 18-hr expiration' },
    ],
    color: 'cyan',
    github: 'https://github.com/rutujagangawane',
    link: 'https://rescuebite-sigma.vercel.app/',
  },
  {
    name: 'RuralBridge',
    tagline: 'Digital Marketplace for Rural Entrepreneurs',
    description: 'Bridging the gap between rural entrepreneurs and urban consumers. Features role-based system for transparent transactions and fair income distribution.',
    image: '/images/ruralbridge.png',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    stack: 'MERN Stack',
    highlights: [
      { icon: Users, text: 'Rural & Urban role system' },
      { icon: ShieldCheck, text: 'Transparent transactions' },
      { icon: Clock, text: 'Fair income distribution' },
    ],
    color: 'blue',
    github: 'https://github.com/rutujagangawane',
    link: 'https://ruralbridgeproject.vercel.app/',
  },
]

export default function Projects() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  return (
    <section id="projects" className={`py-24 ${dark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader accent="Portfolio" title="Featured Projects" subtitle="Applications built with passion, focused on solving real-world problems." />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => {
            const cardColors = dark
              ? {
                  cyan: { border: 'border-cyan-500/20', badge: 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30', highlight: 'text-cyan-400', stackBg: 'bg-cyan-500/20 text-cyan-300' },
                  blue: { border: 'border-blue-500/20', badge: 'bg-blue-500/15 text-blue-300 border border-blue-500/30', highlight: 'text-blue-400', stackBg: 'bg-blue-500/20 text-blue-300' },
                }
              : {
                  cyan: { border: 'border-cyan-200', badge: 'bg-cyan-100 text-cyan-700 border border-cyan-200', highlight: 'text-cyan-600', stackBg: 'bg-cyan-100 text-cyan-700' },
                  blue: { border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700 border border-blue-200', highlight: 'text-blue-600', stackBg: 'bg-blue-100 text-blue-700' },
                }
            const c = cardColors[proj.color as 'cyan' | 'blue']

            return (
              <motion.div
                key={proj.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className={`group rounded-2xl border ${c.border} overflow-hidden ${dark ? 'bg-gray-900' : 'bg-white'} shadow-xl hover:shadow-2xl transition-all`}
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={proj.image} alt={proj.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${c.stackBg}`}>{proj.stack}</span>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.a href={proj.github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`p-2 rounded-lg backdrop-blur-sm ${dark ? 'bg-gray-800/80 text-gray-300 hover:text-white' : 'bg-white/80 text-gray-700 hover:text-gray-900'}`}>
                      <GithubIcon size={16} />
                    </motion.a>
                    <motion.a href={proj.link} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`p-2 rounded-lg backdrop-blur-sm ${dark ? 'bg-gray-800/80 text-gray-300 hover:text-white' : 'bg-white/80 text-gray-700 hover:text-gray-900'}`}>
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-1 ${dark ? 'text-white' : 'text-gray-900'}`}>{proj.name}</h3>
                  <p className={`text-sm font-medium mb-3 ${c.highlight}`}>{proj.tagline}</p>
                  <p className={`text-sm leading-relaxed mb-5 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{proj.description}</p>

                  <div className="space-y-2 mb-5">
                    {proj.highlights.map(({ icon: Icon, text }) => (
                      <div key={text} className={`flex items-center gap-2 text-xs ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                        <Icon size={13} className={c.highlight} />
                        {text}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map(tag => (
                      <span key={tag} className={`px-2.5 py-1 text-xs font-medium rounded-full ${c.badge}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
