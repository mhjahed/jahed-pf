import { useEffect, useState } from 'react'

export default function useTypewriter(
  lines,
  { speed = 68, pause = 1700, start = true } = {},
) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (!start || !lines?.length) return undefined
    let li = 0
    let ci = 0
    let deleting = false
    let timer

    const tick = () => {
      const line = lines[li]
      if (!deleting) {
        ci += 1
        setText(line.slice(0, ci))
        if (ci === line.length) {
          deleting = true
          timer = setTimeout(tick, pause)
          return
        }
        timer = setTimeout(tick, speed)
      } else {
        ci -= 1
        setText(line.slice(0, ci))
        if (ci === 0) {
          deleting = false
          li = (li + 1) % lines.length
          timer = setTimeout(tick, 380)
          return
        }
        timer = setTimeout(tick, 26)
      }
    }

    timer = setTimeout(tick, 500)
    return () => clearTimeout(timer)
  }, [lines, speed, pause, start])

  return text
}
