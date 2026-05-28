import { lazy, Suspense } from 'react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Education = lazy(() => import('./components/Education'))
const Achievements = lazy(() => import('./components/Achievements'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function SectionLoader() {
  const { theme } = useTheme()
  return (
    <div className={`flex justify-center items-center py-24 ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

function AppContent() {
  const { theme } = useTheme()

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}><Experience /></Suspense>
        <Suspense fallback={<SectionLoader />}><Projects /></Suspense>
        <Suspense fallback={<SectionLoader />}><Skills /></Suspense>
        <Suspense fallback={<SectionLoader />}><Education /></Suspense>
        <Suspense fallback={<SectionLoader />}><Achievements /></Suspense>
        <Suspense fallback={<SectionLoader />}><Contact /></Suspense>
      </main>
      <Suspense fallback={null}><Footer /></Suspense>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
