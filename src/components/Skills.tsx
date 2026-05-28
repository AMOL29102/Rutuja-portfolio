import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import SectionHeader from './SectionHeader'

const skillGroups = [
  { category: 'Languages', icon: '{ }', color: 'cyan', skills: ['C++', 'Java', 'SQL', 'Python'] },
  { category: 'Web Development', icon: '</>', color: 'blue', skills: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Node JS', 'Express JS'] },
  { category: 'Databases', icon: '⊞', color: 'teal', skills: ['MySQL', 'MongoDB'] },
  { category: 'Design Tools', icon: '◈', color: 'sky', skills: ['Canva', 'Photoshop', 'Figma', 'WIX'] },
  { category: 'Core Subjects', icon: '∑', color: 'violet', skills: ['DSA', 'OOP', 'DBMS', 'OS'] },
]

type ColorKey = 'cyan' | 'blue' | 'teal' | 'sky' | 'violet'

const darkCardColors: Record<ColorKey, { border: string; header: string; badge: string; icon: string }> = {
  cyan: { border: 'border-cyan-500/25', header: 'text-cyan-400', badge: 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30', icon: 'bg-cyan-500/15 text-cyan-400' },
  blue: { border: 'border-blue-500/25', header: 'text-blue-400', badge: 'bg-blue-500/15 text-blue-300 border border-blue-500/30', icon: 'bg-blue-500/15 text-blue-400' },
  teal: { border: 'border-teal-500/25', header: 'text-teal-400', badge: 'bg-teal-500/15 text-teal-300 border border-teal-500/30', icon: 'bg-teal-500/15 text-teal-400' },
  sky: { border: 'border-sky-500/25', header: 'text-sky-400', badge: 'bg-sky-500/15 text-sky-300 border border-sky-500/30', icon: 'bg-sky-500/15 text-sky-400' },
  violet: { border: 'border-violet-500/25', header: 'text-violet-400', badge: 'bg-violet-500/15 text-violet-300 border border-violet-500/30', icon: 'bg-violet-500/15 text-violet-400' },
}

const lightCardColors: Record<ColorKey, { border: string; header: string; badge: string; icon: string }> = {
  cyan: { border: 'border-cyan-200', header: 'text-cyan-700', badge: 'bg-cyan-100 text-cyan-700 border border-cyan-200', icon: 'bg-cyan-100 text-cyan-600' },
  blue: { border: 'border-blue-200', header: 'text-blue-700', badge: 'bg-blue-100 text-blue-700 border border-blue-200', icon: 'bg-blue-100 text-blue-600' },
  teal: { border: 'border-teal-200', header: 'text-teal-700', badge: 'bg-teal-100 text-teal-700 border border-teal-200', icon: 'bg-teal-100 text-teal-600' },
  sky: { border: 'border-sky-200', header: 'text-sky-700', badge: 'bg-sky-100 text-sky-700 border border-sky-200', icon: 'bg-sky-100 text-sky-600' },
  violet: { border: 'border-violet-200', header: 'text-violet-700', badge: 'bg-violet-100 text-violet-700 border border-violet-200', icon: 'bg-violet-100 text-violet-600' },
}

export default function Skills() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  return (
    <section id="skills" className={`py-24 ${dark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader accent="Technical" title="Skills & Technologies" subtitle="Tools and technologies I use to bring ideas to life." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => {
            const c = (dark ? darkCardColors : lightCardColors)[group.color as ColorKey]
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
                whileHover={{ y: -4 }}
                className={`rounded-2xl border ${c.border} ${dark ? 'bg-gray-800/60' : 'bg-gray-50'} p-6 shadow-lg transition-all`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold font-mono ${c.icon}`}>
                    {group.icon}
                  </div>
                  <h3 className={`font-bold text-base ${dark ? 'text-white' : 'text-gray-900'}`}>{group.category}</h3>
                </div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.06 } }
                  }}
                  className="flex flex-wrap gap-2"
                >
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8, y: 10 },
                        visible: { opacity: 1, scale: 1, y: 0 }
                      }}
                      className={`px-3 py-1.5 text-sm font-medium rounded-lg ${c.badge}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
