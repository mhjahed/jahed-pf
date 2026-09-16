export default function TerminalWindow({ title, children, footer, className = '', bodyClass = '' }) {
  return (
    <div className={`term ${className}`}>
      <div className="term-bar">
        <span className="dot dot-r" />
        <span className="dot dot-y" />
        <span className="dot dot-g" />
        <span className="term-title">{title}</span>
      </div>
      <div className={`term-body ${bodyClass}`}>{children}</div>
      {footer ? <div className="term-foot">{footer}</div> : null}
    </div>
  )
}
