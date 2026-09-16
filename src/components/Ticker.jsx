import { TICKER_ITEMS } from '../data/content'

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-inner">
        {items.map((it, i) => (
          <span key={`${it}-${i}`} className="ticker-item">
            {it} <span className="ticker-sep">▸</span>
          </span>
        ))}
      </div>
    </div>
  )
}
