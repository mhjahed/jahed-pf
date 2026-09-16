import { useCallback, useEffect, useState } from 'react'
import { useScroll, useSpring, motion } from 'framer-motion'
import Boot from './components/Boot'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'

export default function App() {
  const [booted, setBooted] = useState(false)
  const [paletteOpen, setPaletteOpen] = useState(false)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 })

  const finishBoot = useCallback(() => setBooted(true), [])

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <div className="scanlines" aria-hidden="true" />

      {!booted && <Boot onDone={finishBoot} />}

      <Navbar onPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />

      <main className={booted ? 'app is-booted' : 'app'}>
        <Hero start={booted} />
        <Ticker />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
