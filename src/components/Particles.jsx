import { useEffect, useRef } from 'react'

// Lightweight connected-node field with mouse repulsion. Zero deps, 60fps.
export default function Particles() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const DPR = Math.min(window.devicePixelRatio || 1, 1.6)
    const mouse = { x: -9999, y: -9999 }
    let w = 0
    let h = 0
    let raf = 0
    let nodes = []

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * DPR
      canvas.height = h * DPR
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      const n = Math.min(110, Math.floor((w * h) / 15000))
      nodes = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.3 + 0.6,
      }))
    }

    const step = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i]
        a.x += a.vx
        a.y += a.vy
        if (a.x < 0 || a.x > w) a.vx *= -1
        if (a.y < 0 || a.y > h) a.vy *= -1

        const mdx = a.x - mouse.x
        const mdy = a.y - mouse.y
        const md = Math.hypot(mdx, mdy)
        if (md < 120 && md > 0.01) {
          a.x += (mdx / md) * 0.5
          a.y += (mdy / md) * 0.5
        }

        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < 130) {
            ctx.strokeStyle = `rgba(57, 211, 83, ${(1 - d / 130) * 0.26})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      ctx.fillStyle = 'rgba(57, 211, 83, 0.72)'
      for (const a of nodes) {
        ctx.beginPath()
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(step)
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    resize()
    step()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={ref} className="hero-particles" aria-hidden="true" />
}
