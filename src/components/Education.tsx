import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Award } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import SectionHeader from './SectionHeader'

const education = [
  { degree: 'B.E Computer Engineering', institution: 'Pune Institute of Computer Technology', shortName: 'PICT, Pune', year: '2022 – Present', score: 'CGPA: 9.24', level: 'Undergraduate', color: 'cyan', logo: '🎓' },
  { degree: 'HSC – Science', institution: 'Residential JR. College, Ahmednagar', shortName: 'Ahmednagar, MH', year: '2022', score: '90.67%', level: 'Class XII', color: 'blue', logo: '📘' },
  { degree: 'SSC', institution: 'Residential High School, Ahmednagar', shortName: 'Ahmednagar, MH', year: '2020', score: '98.40%', level: 'Class X', color: 'teal', logo: '📗' },
]

export default function Education() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  const colorMap = dark
    ? {
        cyan: { border: 'border-cyan-500/25', accent: 'text-cyan-400', score: 'bg-cyan-500/15 text-cyan-300', level: 'bg-cyan-500/10 text-cyan-400' },
        blue: { border: 'border-blue-500/25', accent: 'text-blue-400', score: 'bg-blue-500/15 text-blue-300', level: 'bg-blue-500/10 text-blue-400' },
        teal: { border: 'border-teal-500/25', accent: 'text-teal-400', score: 'bg-teal-500/15 text-teal-300', level: 'bg-teal-500/10 text-teal-400' },
      }
    : {
        cyan: { border: 'border-cyan-200', accent: 'text-cyan-600', score: 'bg-cyan-100 text-cyan-700', level: 'bg-cyan-50 text-cyan-600' },
        blue: { border: 'border-blue-200', accent: 'text-blue-600', score: 'bg-blue-100 text-blue-700', level: 'bg-blue-50 text-blue-600' },
        teal: { border: 'border-teal-200', accent: 'text-teal-600', score: 'bg-teal-100 text-teal-700', level: 'bg-teal-50 text-teal-600' },
      }

  return (
    <section id="education" className={`py-24 ${dark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader accent="Academic" title="Education" subtitle="My academic background and scholastic achievements." />

        <div className="space-y-6">
          {education.map((edu, i) => {
            const c = colorMap[edu.color as 'cyan' | 'blue' | 'teal']
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ x: 6 }}
                className={`flex items-start gap-5 p-6 rounded-2xl border ${c.border} ${dark ? 'bg-gray-800/60' : 'bg-white'} shadow-lg transition-all`}
              >
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${dark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  {edu.logo}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between flex-wrap gap-3">
                    <div>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${c.level} mb-2 inline-block`}>{edu.level}</span>
                      <h3 className={`text-lg font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>{edu.degree}</h3>
                      <p className={`flex items-center gap-1.5 text-sm mt-0.5 ${c.accent}`}>
                        <GraduationCap size={14} />{edu.institution}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`px-3 py-1 text-sm font-bold rounded-full ${c.score}`}>{edu.score}</span>
                      <span className={`flex items-center gap-1 text-xs ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
                        <Calendar size={11} />{edu.year}
                      </span>
                    </div>
                  </div>

                  <div className={`mt-3 flex items-center gap-2 text-xs ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
                    <Award size={12} className={c.accent} />{edu.shortName}
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
