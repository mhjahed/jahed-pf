import { useEffect, useState } from 'react'
import { SECTIONS } from '../data/content'

export default function Navbar({ onPalette }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => document.getElementById('navmenu')?.classList.remove('show')

  return (
    <nav className={`navbar navbar-expand-lg nav-term fixed-top ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand brand-term" href="#top" onClick={closeMenu}>
          <span className="brand-user">jahed</span>
          <span className="brand-at">@</span>
          <span className="brand-host">dev</span>
          <span className="text-dim">:~$</span>
          <span className="cursor-block">▮</span>
        </a>
        <button
          className="navbar-toggler nav-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          aria-controls="navmenu"
          aria-expanded="false"
          aria-label="toggle navigation"
        >
          [≡]
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {SECTIONS.map((s) => (
              <li className="nav-item" key={s.path}>
                <a className="nav-link nav-term-link" href={`#${s.path}`} onClick={closeMenu}>
                  <span className="nav-num">{s.num}</span>/{s.path}
                </a>
              </li>
            ))}
            <li className="nav-item nav-actions">
              <span className="status-pill">
                <span className="pulse-dot" />
                open_to_work
              </span>
              <button className="kbd-btn" type="button" onClick={onPalette} title="command palette">
                <kbd>ctrl</kbd>+<kbd>k</kbd>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
