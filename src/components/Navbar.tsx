import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, Code2 } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const nav = document.querySelector('nav') as HTMLElement | null
      const navH = nav?.offsetHeight ?? 80
      const targetTop = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - navH - 12
      
      const startTop = window.scrollY
      const distance = targetTop - startTop
      const duration = 1000 // 1 second duration for slower scroll
      let startTime: number | null = null

      const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
        t /= d / 2
        if (t < 1) return c / 2 * t * t + b
        t--
        return -c / 2 * (t * (t - 2) - 1) + b
      }

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const run = easeInOutQuad(timeElapsed, startTop, distance, duration)
        window.scrollTo(0, run)
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation)
        } else {
          window.scrollTo(0, targetTop)
        }
      }

      requestAnimationFrame(animation)
    }
  }

  const dark = theme === 'dark'

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${
          scrolled
            ? dark
              ? 'bg-gray-950/90 backdrop-blur-xl border-b border-cyan-500/20'
              : 'bg-white/90 backdrop-blur-xl border-b border-gray-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleNavClick('#home')}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`p-1.5 rounded-lg ${dark ? 'bg-cyan-500/20' : 'bg-cyan-100'}`}>
                <Code2 size={18} className="text-cyan-500" />
              </div>
              <span className={`font-bold text-lg ${dark ? 'text-white' : 'text-gray-900'}`}>
                RG<span className="text-cyan-500">.</span>
              </span>
            </motion.div>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    activeSection === link.href.slice(1)
                      ? 'text-cyan-500'
                      : dark
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {activeSection === link.href.slice(1) && (
                    <motion.span
                      layoutId="activeNav"
                      className={`absolute inset-0 rounded-lg ${dark ? 'bg-cyan-500/10' : 'bg-cyan-50'}`}
                      transition={{ type: 'spring', bounce: 0.3 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-lg ${
                  dark ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>

              <button
                onClick={() => setMobileOpen(v => !v)}
                className={`md:hidden p-2 rounded-lg ${dark ? 'text-gray-400' : 'text-gray-600'}`}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`fixed top-16 left-0 right-0 z-40 ${
              dark ? 'bg-gray-950/95 backdrop-blur-xl' : 'bg-white/95 backdrop-blur-xl'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium ${
                    activeSection === link.href.slice(1)
                      ? 'bg-cyan-500/10 text-cyan-500'
                      : dark ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
