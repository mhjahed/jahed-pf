export default function SectionHeader({ num, path, title, note }) {
  return (
    <div className="sec-head">
      <div className="sec-cmd">
        <span className="prompt">mhjahed@sylhet:~$</span> cd ~/{path} && ls -la
      </div>
      <h2 className="sec-title">
        <span className="sec-num">{num}</span> / {title}
        <span className="cursor-block">▮</span>
      </h2>
      {note ? <div className="sec-note">{note}</div> : null}
    </div>
  )
}
