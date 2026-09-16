import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronDown, FiAward } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import TerminalWindow from './TerminalWindow'
import { CERTS, EDUCATION } from '../data/content'

export default function Education() {
  const [open, setOpen] = useState(0)

  return (
    <section id="education" className="sec">
      <div className="container">
        <SectionHeader num="05" path="education" title="EDUCATION" note="transcripts + verified credentials" />

        <div className="row g-4 mb-4">
          {EDUCATION.map((ed, i) => (
            <motion.div
              className="col-md-6"
              key={ed.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <TerminalWindow title={`cat education/${ed.id}.txt`} className="h-100">
                <div className="edu-degree">{ed.degree}</div>
                <div className="edu-school">{ed.school}</div>
                <div className="edu-row">
                  <span className="text-dim">class of {ed.year}</span>
                  <span className="edu-grade">{ed.grade}</span>
                </div>
              </TerminalWindow>
            </motion.div>
          ))}
        </div>

        <TerminalWindow title="cert --verify --all">
          {CERTS.map((c, i) => (
            <div key={c.group} className="cert">
              <button
                type="button"
                className={`cert-head ${open === i ? 'is-open' : ''}`}
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>
                  <span className="prompt">$</span> cert --list --category={c.group.replaceAll(' ', '-')}
                </span>
                <FiChevronDown className="cert-caret" size={15} />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    className="cert-body"
                  >
                    {c.items.map((item, j) => (
                      <div className="cert-item" key={item}>
                        <span className="cert-tree">{j === c.items.length - 1 ? '└─' : '├─'}</span>
                        <FiAward size={13} className="cert-icon" />
                        {item}
                        <span className="cert-ok">[verified]</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </TerminalWindow>
      </div>
    </section>
  )
}
