import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

interface Props {
  title: string
  subtitle?: string
  accent?: string
}

export default function SectionHeader({ title, subtitle, accent }: Props) {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      {accent && (
        <span className={`inline-block text-xs font-mono font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full ${dark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-100 text-cyan-600'}`}>
          {accent}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base max-w-xl mx-auto ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{subtitle}</p>
      )}
      <div className="mt-5 flex items-center justify-center gap-2">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500" />
        <div className="w-2 h-2 rounded-full bg-cyan-500" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
      </div>
    </motion.div>
  )
}
