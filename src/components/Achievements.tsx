import { motion } from 'framer-motion'
import { Star, Users, Newspaper, Megaphone, Heart } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import SectionHeader from './SectionHeader'

interface Achievement {
  id: string
  title: string
  subtitle: string
  description: string
  icon: React.ElementType
  color: string
  tags: string[]
}

const achievements: Achievement[] = [
  { id: 'nss', title: 'NSS Member & Design Head', subtitle: 'PICT – Pune Institute of Computer Technology', description: 'Active NSS member contributing to social service initiatives and serving as Design Head, creating visual content and promotional material for NSS events.', icon: Heart, color: 'rose', tags: ['NSS', 'Social Service', 'Design', 'Leadership'] },
  { id: 'dada', title: '"Dada Chi Shala" Rural Education Website', subtitle: 'Ongoing Social Project', description: 'Currently developing a rural education website aimed at bridging the digital divide for students in underserved areas.', icon: Star, color: 'amber', tags: ['Web Dev', 'Social Impact', 'Education'] },
  { id: 'newsletter', title: 'Newsletter Designer', subtitle: 'PICT Computer Department', description: 'Designed the official department newsletter with visual layouts for academic events and technical articles.', icon: Newspaper, color: 'cyan', tags: ['Design', 'Canva', 'Typography'] },
  { id: 'pasc', title: 'PASC Member & Publicity Lead', subtitle: 'Pulzion – Annual Tech Festival', description: "Served as Publicity Lead for Pulzion, PICT's flagship tech event. Managed campaigns and designed promotional content.", icon: Megaphone, color: 'blue', tags: ['PASC', 'Marketing', 'Leadership'] },
  { id: 'ngo', title: 'NGO Visit Coordinator', subtitle: 'Pictorial Club – PICT', description: 'Coordinated NGO visits, organizing photography sessions at social welfare organizations.', icon: Users, color: 'teal', tags: ['Coordination', 'Photography', 'NGO'] },
]

type ColorKey = 'rose' | 'amber' | 'cyan' | 'blue' | 'teal'

const darkCardColors: Record<ColorKey, { border: string; iconBg: string; iconText: string; badge: string }> = {
  rose: { border: 'border-rose-500/25', iconBg: 'bg-rose-500/15', iconText: 'text-rose-400', badge: 'bg-rose-500/10 text-rose-300' },
  amber: { border: 'border-amber-500/25', iconBg: 'bg-amber-500/15', iconText: 'text-amber-400', badge: 'bg-amber-500/10 text-amber-300' },
  cyan: { border: 'border-cyan-500/25', iconBg: 'bg-cyan-500/15', iconText: 'text-cyan-400', badge: 'bg-cyan-500/10 text-cyan-300' },
  blue: { border: 'border-blue-500/25', iconBg: 'bg-blue-500/15', iconText: 'text-blue-400', badge: 'bg-blue-500/10 text-blue-300' },
  teal: { border: 'border-teal-500/25', iconBg: 'bg-teal-500/15', iconText: 'text-teal-400', badge: 'bg-teal-500/10 text-teal-300' },
}

const lightCardColors: Record<ColorKey, { border: string; iconBg: string; iconText: string; badge: string }> = {
  rose: { border: 'border-rose-200', iconBg: 'bg-rose-100', iconText: 'text-rose-600', badge: 'bg-rose-100 text-rose-700' },
  amber: { border: 'border-amber-200', iconBg: 'bg-amber-100', iconText: 'text-amber-600', badge: 'bg-amber-100 text-amber-700' },
  cyan: { border: 'border-cyan-200', iconBg: 'bg-cyan-100', iconText: 'text-cyan-600', badge: 'bg-cyan-100 text-cyan-700' },
  blue: { border: 'border-blue-200', iconBg: 'bg-blue-100', iconText: 'text-blue-600', badge: 'bg-blue-100 text-blue-700' },
  teal: { border: 'border-teal-200', iconBg: 'bg-teal-100', iconText: 'text-teal-600', badge: 'bg-teal-100 text-teal-700' },
}

// Certificates/preview removed as requested — achievements now show highlights only

export default function Achievements() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  return (
    <section id="achievements" className={`py-24 ${dark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader accent="Recognition" title="Achievements" subtitle="Recognition & highlights." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, i) => {
            const c = (dark ? darkCardColors : lightCardColors)[ach.color as ColorKey]
            const Icon = ach.icon
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(ach)}
                className={`group cursor-pointer rounded-2xl border ${c.border} ${dark ? 'bg-gray-800/60' : 'bg-gray-50'} p-5 shadow-lg hover:shadow-xl transition-all`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${c.iconBg} group-hover:scale-110 transition-transform`}>
                    <Icon size={20} className={c.iconText} />
                  </div>
                  <div>
                    <h3 className={`font-bold text-sm leading-snug mb-0.5 ${dark ? 'text-white' : 'text-gray-900'}`}>{ach.title}</h3>
                    <p className={`text-xs ${c.iconText}`}>{ach.subtitle}</p>
                  </div>
                </div>

                <p className={`text-xs leading-relaxed mb-4 line-clamp-2 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{ach.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {ach.tags.slice(0, 3).map(tag => (
                    <span key={tag} className={`px-2 py-0.5 text-xs rounded-full ${c.badge}`}>{tag}</span>
                  ))}
                </div>
                
              </motion.div>
            )
          })}
        </div>
      </div>
      
    </section>
  )
}
