import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import SectionHeader from './SectionHeader'
import TerminalWindow from './TerminalWindow'
import { ABOUT_JSON, PROFILE, STATS } from '../data/content'

function JsonValue({ v }) {
  if (Array.isArray(v)) {
    return (
      <span>
        [
        {v.map((x, i) => (
          <span key={x}>
            <span className="json-str">&quot;{x}&quot;</span>
            {i < v.length - 1 ? ', ' : ''}
          </span>
        ))}
        ]
      </span>
    )
  }
  return <span className="json-str">&quot;{String(v)}&quot;</span>
}

function Counter({ n, suffix, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return undefined
    const ctrl = animate(0, n, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setVal(Math.round(v)),
    })
    return () => ctrl.stop()
  }, [inView, n])

  return (
    <div ref={ref} className="stat-cell">
      <div className="stat-num">
        {val}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="sec">
      <div className="container">
        <SectionHeader num="01" path="about" title="ABOUT" />

        <div className="row g-4 align-items-stretch">
          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <TerminalWindow title="cat ~/about.json — utf-8" footer={<span>[parsed] valid · 0 warnings</span>} className="h-100">
              <pre className="json-view">
                <span className="json-punc">{'{'}</span>
                {Object.entries(ABOUT_JSON).map(([k, v]) => (
                  <span key={k} className="json-line">
                    {'  '}
                    <span className="json-key">&quot;{k}&quot;</span>
                    <span className="json-punc">: </span>
                    <JsonValue v={v} />
                    <span className="json-punc">,</span>
                  </span>
                ))}
                <span className="json-punc">{'}'}</span>
              </pre>
            </TerminalWindow>
          </motion.div>

          <motion.div
            className="col-lg-5"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <TerminalWindow title="motd — message of the day" className="h-100">
              <p className="motd">
                <span className="accent">#</span> I&apos;m a back-end developer from{' '}
                <span className="accent">{PROFILE.location}</span>. I specialize in{' '}
                <span className="json-str">Python (Django, DRF)</span> and{' '}
                <span className="json-str">React JS</span> — clean APIs, readable code,
                UIs that feel engineered rather than decorated.
              </p>
              <p className="motd-dim">
                <span className="text-dim">#</span> Security is the default, not the
                ticket at the end. Every system I design starts by assuming its own
                ending.
              </p>
              <div className="motd-rule" />
              <div className="motd-cmds">
                <div>
                  <span className="prompt">$</span> gpg --fingerprint
                  <span className="motd-out">trust level: ultimate</span>
                </div>
                <div>
                  <span className="prompt">$</span> echo $COFFEE_LEVEL
                  <span className="motd-out">sufficient</span>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>
        </div>

        <div className="stat-grid">
          {STATS.map((s) => (
            <Counter key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
