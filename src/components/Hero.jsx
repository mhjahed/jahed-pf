import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import useTypewriter from '../hooks/useTypewriter'
import Particles from './Particles'
import TerminalWindow from './TerminalWindow'
import { PROFILE, ROLES } from '../data/content'

// WebGL payload (three.js) streams in after first paint
const HeroScene = lazy(() => import('./HeroScene'))

export default function Hero({ start }) {
  const typed = useTypewriter(ROLES, { start })

  return (
    <header id="top" className="hero">
      <Particles />
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="container hero-content">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={start ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="hero-cmd">
                <span className="prompt">mhjahed@sylhet:~$</span> whoami
                <span className="hero-cmd-meta">— human-readable, mostly</span>
              </div>
              <h1 className="hero-name">{PROFILE.name}</h1>
              <div className="hero-role">
                <span className="text-dim">&gt;</span>{' '}
                <span className="accent">{typed}</span>
                <span className="cursor-block">▮</span>
              </div>
              <p className="hero-tag">{PROFILE.tagline}</p>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <a href="#projects" className="btn-term primary">
                  view_projects
                </a>
                <a href={PROFILE.resume} className="btn-term" download>
                  download_resume
                </a>
                <a href="#contact" className="btn-term">
                  hire_me
                </a>
              </div>

              <div className="hero-meta">
                <span>[os] ubuntu 24.04</span>
                <span>[shell] zsh</span>
                <span>[uptime] 4y+ writing code</span>
                <span>[grid] sylhet · utc+6</span>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-5 d-none d-lg-block">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={start ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            >
              <TerminalWindow
                title="render — three.js · webgl2 · 60fps"
                footer={<span>[tris] ~3k · [rings] 2 · [halo] 260 n</span>}
                className="hero-render"
              >
                <div className="hero-canvas-wrap">
                  <Suspense fallback={<div className="hero-canvas-loading">initializing webgl…</div>}>
                    <HeroScene />
                  </Suspense>
                </div>
              </TerminalWindow>
            </motion.div>
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#about" aria-label="scroll down">
        <span className="text-dim">$</span> scroll --down <span className="cue-arrow">▾</span>
      </a>
    </header>
  )
}
