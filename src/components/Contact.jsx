import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiGithub, FiGlobe, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'
import SectionHeader from './SectionHeader'
import TerminalWindow from './TerminalWindow'
import { PROFILE } from '../data/content'

// ── EmailJS configuration ─────────────────────────────────────
// 1) https://dashboard.emailjs.com → Add Service → copy Service ID
// 2) Email Templates → create template with {{from_name}} {{from_email}} {{subject}} {{message}}
// 3) Account → copy Public Key. Paste all three below. Until then the form
//    runs in simulation mode (still validates + renders the success path).
const EMAILJS = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY',
}
const emailReady = !EMAILJS.serviceId.startsWith('YOUR_')

export default function Contact() {
  const formRef = useRef(null)
  const [sending, setSending] = useState(false)
  const [notice, setNotice] = useState(null) // { ok: bool, line: string }

  const submit = async (e) => {
    e.preventDefault()
    if (sending) return
    const fd = new FormData(formRef.current)
    const payload = {
      from_name: fd.get('from_name') ?? '',
      from_email: fd.get('from_email') ?? '',
      subject: fd.get('subject') ?? '',
      message: fd.get('message') ?? '',
    }
    setSending(true)
    setNotice(null)
    try {
      if (emailReady) {
        await emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, payload, {
          publicKey: EMAILJS.publicKey,
        })
      } else {
        await new Promise((r) => setTimeout(r, 900)) // simulation mode
      }
      setNotice({
        ok: true,
        line: `250 message queued for delivery → ${PROFILE.email}${emailReady ? '' : ' (simulation: add EmailJS keys)'}`,
      })
      formRef.current?.reset()
    } catch {
      setNotice({ ok: false, line: '550 relay error — try again or mail directly' })
    } finally {
      setSending(false)
      setTimeout(() => setNotice(null), 7000)
    }
  }

  return (
    <section id="contact" className="sec sec-alt">
      <div className="container">
        <SectionHeader
          num="06"
          path="contact"
          title="CONTACT"
          note="channel is open — median reply time under 24h"
        />

        <div className="row g-4">
          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.6 }}
          >
            <TerminalWindow title={`send --to=${PROFILE.email} --priority=high`} className="h-100">
              <form ref={formRef} onSubmit={submit} className="contact-form">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label className="t-label" htmlFor="c-name">--name <span className="t-req">*required</span></label>
                    <input id="c-name" name="from_name" className="t-input" placeholder="Ada Lovelace" required />
                  </div>
                  <div className="col-sm-6">
                    <label className="t-label" htmlFor="c-mail">--email <span className="t-req">*required</span></label>
                    <input id="c-mail" name="from_email" type="email" className="t-input" placeholder="ada@analytical.engine" required />
                  </div>
                  <div className="col-12">
                    <label className="t-label" htmlFor="c-sub">--subject</label>
                    <input id="c-sub" name="subject" className="t-input" placeholder="freelance · internship · collaboration" />
                  </div>
                  <div className="col-12">
                    <label className="t-label" htmlFor="c-msg">--message <span className="t-req">*required</span></label>
                    <textarea id="c-msg" name="message" className="t-input t-area" rows="5" placeholder="> hello jahed, we need a backend that…" required />
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3 mt-4 flex-wrap">
                  <button className="btn-term primary" type="submit" disabled={sending}>
                    {sending ? 'transmitting…' : <>send <FiSend size={13} /></>}
                  </button>
                  <span className="text-dim fs-mono-sm">enter ↵ to queue · data goes nowhere else</span>
                </div>

                <AnimatePresence>
                  {notice && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`notice ${notice.ok ? 'notice-ok' : 'notice-err'}`}
                    >
                      <span className="notice-tag">{notice.ok ? 'smtp' : 'err'}</span> {notice.line}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </TerminalWindow>
          </motion.div>

          <motion.div
            className="col-lg-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <TerminalWindow title="geo --lookup --format=long" className="mb-4">
              <pre className="geo-view">
                    {`host      ${PROFILE.host}
                    location  ${PROFILE.location}
                    coords    ${PROFILE.coords}
                    timezone  ${PROFILE.tz}
                    uplink    stable · low latency
                    status    accepting connections`}
              </pre>
            </TerminalWindow>

            <TerminalWindow title="cat ~/.config/channels">
              <ul className="channel-list">
                <li>
                  <a href={PROFILE.github} target="_blank" rel="noreferrer">
                    <FiGithub /> <span className="ch-key">github</span>
                    <span className="ch-val">github.com/{PROFILE.handle}</span>
                  </a>
                </li>
                <li>
                  <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                    <FiLinkedin /> <span className="ch-key">linkedin</span>
                    <span className="ch-val">/in/{PROFILE.handle}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${PROFILE.email}`}>
                    <FiMail /> <span className="ch-key">email</span>
                    <span className="ch-val">{PROFILE.email}</span>
                  </a>
                </li>
                <li>
                  <a href={PROFILE.blog} target="_blank" rel="noreferrer">
                    <FiGlobe /> <span className="ch-key">blog</span>
                    <span className="ch-val">personal-blog.workers.dev</span>
                  </a>
                </li>
              </ul>
            </TerminalWindow>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
