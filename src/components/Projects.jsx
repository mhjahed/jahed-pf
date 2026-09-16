import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import TerminalWindow from './TerminalWindow'
import { PROJECTS, PROFILE } from '../data/content'

const FILTERS = [
  { key: 'all', label: '--all' },
  { key: 'django', label: '--django' },
  { key: 'react', label: '--react' },
  { key: 'featured', label: '--featured' },
]

function relTime(iso) {
  const s = Math.floor((Date.now() - new Date(iso).getTime()) / 1000)
  if (s < 3600) return `${Math.max(1, Math.floor(s / 60))}m ago`
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`
  if (s < 2592000) return `${Math.floor(s / 86400)}d ago`
  return `${Math.floor(s / 2592000)}mo ago`
}

function ProjectCard({ p, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="col-md-6 col-xl-4"
    >
      <div className={`term proj ${p.featured ? 'is-featured' : ''}`}>
        <div className="term-bar">
          <span className="dot dot-r" />
          <span className="dot dot-y" />
          <span className="dot dot-g" />
          <span className="term-title">{p.file}</span>
          {p.featured && (
            <span className="pin-badge">
              <FiStar size={10} /> pinned
            </span>
          )}
        </div>
        <div className="term-body proj-body">
          <div className="proj-stack">&gt; {p.title}</div>
          <p className="proj-desc">{p.desc}</p>
          <div className="proj-tags">
            {p.tags.map((t) => (
              <span key={t} className="tag">
                #{t}
              </span>
            ))}
          </div>
          <div className="proj-foot">
            <span className={`st st-${p.status}`}>
              <span className="st-dot" />
              {p.status}
            </span>
            <span className="proj-links">
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer" className="proj-link">
                  <FiExternalLink size={13} /> live
                </a>
              )}
              <a href={p.repo} target="_blank" rel="noreferrer" className="proj-link">
                <FiGithub size={13} /> source
              </a>
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function GitFeed() {
  const [repos, setRepos] = useState(null)
  const [offline, setOffline] = useState(false)

  useEffect(() => {
    let dead = false
    fetch('https://api.github.com/users/mhjahed/repos?sort=pushed&per_page=6')
      .then((r) => {
        if (!r.ok) throw new Error('http')
        return r.json()
      })
      .then((d) => {
        if (!dead) setRepos(d)
      })
      .catch(() => {
        if (!dead) setOffline(true)
      })
    return () => {
      dead = true
    }
  }, [])

  return (
    <TerminalWindow
      title="git log --oneline --all (live: api.github.com)"
      footer={
        <a href={PROFILE.github} target="_blank" rel="noreferrer" className="proj-link">
          <FiGithub size={12} /> github.com/{PROFILE.handle} — full history
        </a>
      }
      className="mt-5"
    >
      <div className="gitfeed">
        {!repos && !offline && <div className="gitfeed-line text-dim">fetching refs…</div>}
        {offline && (
          <div className="gitfeed-line text-dim">
            api unreachable — browse the source at github.com/{PROFILE.handle}
          </div>
        )}
        {repos?.map((r) => (
          <a
            key={r.id}
            href={r.html_url}
            target="_blank"
            rel="noreferrer"
            className="gitfeed-line"
          >
            <span className="git-star">*</span>
            <span className="git-hash">{r.pushed_at.slice(2, 10).replaceAll('-', '')}</span>
            <span className="git-name">{r.name}</span>
            <span className="git-lang">{r.language || 'plain'}</span>
            <span className="git-time">{relTime(r.pushed_at)}</span>
          </a>
        ))}
      </div>
    </TerminalWindow>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const shown = PROJECTS.filter((p) =>
    filter === 'all' ? true : filter === 'featured' ? p.featured : p.stack === filter,
  )

  return (
    <section id="projects" className="sec">
      <div className="container">
        <SectionHeader
          num="03"
          path="projects"
          title="PROJECTS"
          note="real repositories — 'source' links open the actual code"
        />

        <div className="skill-tabs mb-4" role="tablist" aria-label="project filters">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={filter === f.key}
              className={`skill-tab ${filter === f.key ? 'is-active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              <span className="text-dim">ls</span> {f.label}
            </button>
          ))}
          <span className="filter-count">
            {shown.length} result{shown.length === 1 ? '' : 's'}
          </span>
        </div>

        <div className="row g-4">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <ProjectCard key={p.id} p={p} index={i} />
            ))}
          </AnimatePresence>
        </div>

        <GitFeed />
      </div>
    </section>
  )
}
