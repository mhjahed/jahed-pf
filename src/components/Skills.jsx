import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import TerminalWindow from './TerminalWindow'
import { SKILL_CHIPS, SKILL_GROUPS } from '../data/content'

export default function Skills() {
  const [active, setActive] = useState(SKILL_GROUPS[0].key)
  const group = SKILL_GROUPS.find((g) => g.key === active)

  return (
    <section id="skills" className="sec sec-alt">
      <div className="container">
        <SectionHeader
          num="02"
          path="skills"
          title="SKILLS"
          note="benchmarked against real projects, not tutorial playlists"
        />

        <div className="skill-tabs" role="tablist" aria-label="skill groups">
          {SKILL_GROUPS.map((g, i) => (
            <button
              key={g.key}
              type="button"
              role="tab"
              aria-selected={active === g.key}
              className={`skill-tab ${active === g.key ? 'is-active' : ''}`}
              onClick={() => setActive(g.key)}
            >
              <span className="text-dim">[{i + 1}]</span> {g.label}
            </button>
          ))}
        </div>

        <TerminalWindow title={`skill --profile=${group.label} --format=bar`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={group.key}
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -14 }}
              transition={{ duration: 0.25 }}
            >
              {group.rows.map((row, i) => (
                <div className="skill-row" key={row.name}>
                  <div className="skill-head">
                    <span className="skill-name">{row.name}</span>
                    <span className="skill-pct">{row.pct}%</span>
                  </div>
                  <div className="skill-track">
                    <motion.div
                      className="skill-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${row.pct}%` }}
                      transition={{ duration: 0.9, ease: 'easeOut', delay: 0.08 + i * 0.07 }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </TerminalWindow>

        <div className="chip-cloud">
          <span className="chip-label">
            <span className="prompt">$</span> dpkg --list | grep misc
          </span>
          {SKILL_CHIPS.map((c) => (
            <span key={c} className="chip">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
