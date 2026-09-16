import { useEffect, useRef, useState } from 'react'
import { BOOT_LINES } from '../data/content'

export default function Boot({ onDone }) {
  const [lines, setLines] = useState([])
  const [pct, setPct] = useState(0)
  const doneRef = useRef(false)

  useEffect(() => {
    const finish = () => {
      if (doneRef.current) return
      doneRef.current = true
      onDone()
    }
    let i = 0
    const id = setInterval(() => {
      i += 1
      setLines(BOOT_LINES.slice(0, i))
      setPct(Math.round((i / BOOT_LINES.length) * 100))
      if (i >= BOOT_LINES.length) {
        clearInterval(id)
        setTimeout(finish, 700)
      }
    }, 220)
    window.addEventListener('keydown', finish)
    window.addEventListener('pointerdown', finish)
    return () => {
      clearInterval(id)
      window.removeEventListener('keydown', finish)
      window.removeEventListener('pointerdown', finish)
    }
  }, [onDone])

  return (
    <div className="boot" role="status" aria-label="booting portfolio">
      <div className="boot-inner">
        <pre className="boot-log">{lines.join('\n')}</pre>
        <div className="boot-track">
          <div className="boot-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="boot-hint">press any key to skip ▸</div>
      </div>
    </div>
  )
}
