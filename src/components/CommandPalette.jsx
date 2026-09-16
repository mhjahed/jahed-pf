import { useEffect, useMemo, useRef, useState } from 'react'
import { SECTIONS, PROFILE } from '../data/content'

const ACTIONS = [
  ...SECTIONS.map((s) => ({
    id: s.path,
    label: `cd ~/${s.path}`,
    hint: 'section',
    run: () => document.getElementById(s.path)?.scrollIntoView({ behavior: 'smooth' }),
  })),
  { id: 'gh', label: `open https://github.com/${PROFILE.handle}`, hint: 'external', run: () => window.open(PROFILE.github, '_blank') },
  { id: 'blog', label: 'open personal-blog (live)', hint: 'external', run: () => window.open(PROFILE.blog, '_blank') },
  { id: 'mail', label: `mail ${PROFILE.email}`, hint: 'compose', run: () => { window.location.href = `mailto:${PROFILE.email}` } },
  { id: 'cv', label: 'download resume.pdf', hint: 'file', run: () => { const a = document.createElement('a'); a.href = PROFILE.resume; a.download = ''; a.click() } },
]

export default function CommandPalette({ open, onClose }) {
  const [q, setQ] = useState('')
  const [idx, setIdx] = useState(0)
  const inputRef = useRef(null)

  const items = useMemo(() => {
    const query = q.trim().toLowerCase()
    if (!query) return ACTIONS
    return ACTIONS.filter((a) => a.label.toLowerCase().includes(query))
  }, [q])

  useEffect(() => {
    if (open) {
      setQ('')
      setIdx(0)
      setTimeout(() => inputRef.current?.focus(), 30)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => setIdx(0), [items.length])

  const onKey = (e) => {
    if (e.key === 'Escape') onClose()
    else if (e.key === 'ArrowDown') { e.preventDefault(); setIdx((i) => Math.min(i + 1, items.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)) }
    else if (e.key === 'Enter' && items[idx]) { items[idx].run(); onClose() }
  }

  if (!open) return null

  return (
    <div className="palette-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="command palette">
      <div className="palette" onClick={(e) => e.stopPropagation()}>
        <div className="palette-input-row">
          <span className="prompt">&gt;_</span>
          <input
            ref={inputRef}
            className="palette-input"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKey}
            placeholder="type a command… (try: projects, mail, resume)"
            aria-label="command input"
          />
          <kbd className="palette-esc">esc</kbd>
        </div>
        <ul className="palette-list">
          {items.length === 0 && <li className="palette-empty">no matching command — try “projects”</li>}
          {items.map((a, i) => (
            <li key={a.id}>
              <button
                type="button"
                className={`palette-item ${i === idx ? 'is-active' : ''}`}
                onMouseEnter={() => setIdx(i)}
                onClick={() => { a.run(); onClose() }}
              >
                <span className="palette-cmd">{a.label}</span>
                <span className="palette-hint">[{a.hint}]</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="palette-foot">
          <span><kbd>↑↓</kbd> navigate</span>
          <span><kbd>↵</kbd> run</span>
          <span><kbd>esc</kbd> close</span>
        </div>
      </div>
    </div>
  )
}
