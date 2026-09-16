import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { PROFILE } from '../data/content'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <footer className="foot">
        <div className="container d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div className="foot-line">
            <span className="prompt">$</span> whoami →{' '}
            <span className="accent">{PROFILE.handle}</span>
            <span className="text-dim">
              {' '}
              · © {new Date().getFullYear()} · handcrafted with react18 + vite + three
            </span>
          </div>
          <div className="foot-line text-dim">
            process: jahed-os · pid 1337 · exit 0
          </div>
        </div>
      </footer>

      <button
        type="button"
        className={`to-top ${showTop ? 'is-visible' : ''}`}
        onClick={toTop}
        aria-label="scroll to top"
      >
        <FiArrowUp size={15} /> top
      </button>
    </>
  )
}
