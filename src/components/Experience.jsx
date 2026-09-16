import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import TerminalWindow from './TerminalWindow'
import { EXPERIENCE } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="sec sec-alt">
      <div className="container">
        <SectionHeader
          num="04"
          path="experience"
          title="EXPERIENCE"
          note="from keeping a 30-seat lab alive to shipping back-end services"
        />

        <div className="tl">
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.id}
              className="tl-item"
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
            >
              <TerminalWindow
                title={`journalctl --unit=career --priority=${EXPERIENCE.length - i}`}
                className={e.current ? 'is-current' : ''}
              >
                <div className="job-head">
                  <div>
                    <div className="job-role">{e.role}</div>
                    <div className="job-org">{e.org}</div>
                  </div>
                  <div className="job-meta">
                    <span className="job-period">{e.period}</span>
                    {e.current && <span className="job-active">[active]</span>}
                  </div>
                </div>
                <ul className="job-log">
                  {e.log.map((l) => (
                    <li key={l}>
                      <span className="job-plus">+</span> {l}
                    </li>
                  ))}
                </ul>
              </TerminalWindow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
