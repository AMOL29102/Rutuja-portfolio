import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import SectionHeader from './SectionHeader'

const experiences = [
  {
    role: 'Software Engineer Intern',
    company: 'Emerson',
    period: 'Jan 2026 – Present',
    location: 'Remote / On-site',
    type: 'Current',
    color: 'cyan',
    highlights: [
      'Built automation bots using Python and Robocorp to streamline repetitive tasks.',
      'Developed and tested RPA workflows to improve process efficiency.',
      'Collaborated with cross-functional teams to identify automation opportunities.',
    ],
    tags: ['Python', 'Robocorp', 'RPA', 'Automation'],
  },
  {
    role: 'UI/UX Intern',
    company: 'Divegen Technologies Pvt. Ltd.',
    period: 'Mar 2025 – Apr 2025',
    location: 'Pune, India',
    type: 'Completed',
    color: 'blue',
    highlights: [
      "Designed the company's official website with prototypes and wireframes.",
      'Created animations for small businesses using industry-standard tools.',
      'Utilized Canva, Figma, and Wix Studio for end-to-end design delivery.',
    ],
    tags: ['Figma', 'Canva', 'Wix Studio', 'UI/UX Design', 'Prototyping'],
  },
]

const darkColors: Record<string, { border: string; bg: string; text: string; badge: string; dot: string }> = {
  cyan: { border: 'border-cyan-500/30', bg: 'bg-cyan-500/5', text: 'text-cyan-400', badge: 'bg-cyan-500/20 text-cyan-300', dot: 'bg-cyan-500' },
  blue: { border: 'border-blue-500/30', bg: 'bg-blue-500/5', text: 'text-blue-400', badge: 'bg-blue-500/20 text-blue-300', dot: 'bg-blue-500' },
}

const lightColors: Record<string, { border: string; bg: string; text: string; badge: string; dot: string }> = {
  cyan: { border: 'border-cyan-300', bg: 'bg-cyan-50', text: 'text-cyan-600', badge: 'bg-cyan-100 text-cyan-700', dot: 'bg-cyan-500' },
  blue: { border: 'border-blue-300', bg: 'bg-blue-50', text: 'text-blue-600', badge: 'bg-blue-100 text-blue-700', dot: 'bg-blue-500' },
}

export default function Experience() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  return (
    <section id="experience" className={`py-24 ${dark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader accent="Career" title="Work Experience" subtitle="My professional journey building software and designing digital experiences." />

        <div className="relative">
          <div className={`absolute left-6 top-0 bottom-0 w-0.5 ${dark ? 'bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent' : 'bg-gradient-to-b from-cyan-400 via-blue-400 to-transparent'} md:left-1/2 md:-ml-px`} />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const c = (dark ? darkColors : lightColors)[exp.color]
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`relative pl-16 md:pl-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
                >
                  <div className={`absolute left-4 top-6 w-4 h-4 rounded-full ${c.dot} ring-4 ${dark ? 'ring-gray-900' : 'ring-white'}`} />

                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`rounded-2xl border p-6 ${c.border} ${dark ? 'bg-gray-800/60' : 'bg-white'} shadow-lg`}
                  >
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={15} className={c.text} />
                          <span className={`text-xs font-semibold uppercase tracking-wider ${c.text}`}>{exp.company}</span>
                        </div>
                        <h3 className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>{exp.role}</h3>
                      </div>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${exp.type === 'Current' ? (dark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700') : (dark ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-600')}`}>
                        {exp.type}
                      </span>
                    </div>

                    <div className={`flex flex-wrap gap-4 text-xs mb-5 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                      <span className="flex items-center gap-1"><Calendar size={12} />{exp.period}</span>
                      <span className="flex items-center gap-1"><MapPin size={12} />{exp.location}</span>
                    </div>

                    <ul className="space-y-2.5 mb-5">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className={`flex items-start gap-2.5 text-sm ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
                          <CheckCircle2 size={14} className={`mt-0.5 flex-shrink-0 ${c.text}`} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} className={`px-2.5 py-1 text-xs font-medium rounded-full ${c.badge}`}>{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
