import { useState } from 'react'
import { experience } from '../data/data.js'
import Accordion from './Accordion.jsx'
import styles from './Experience.module.css'

const COLOR_MAP = {
  accent: { text: 'var(--accent)', bg: 'var(--accent-bg)', border: 'rgba(10,99,224,.25)' },
  green:  { text: 'var(--green)',  bg: 'var(--green-bg)',  border: 'rgba(12,165,100,.25)' },
  purple: { text: 'var(--purple)', bg: 'var(--purple-bg)', border: 'rgba(115,49,203,.25)' },
  gold:   { text: 'var(--gold)',   bg: 'var(--gold-bg)',   border: 'rgba(176,126,4,.25)' },
  muted:  { text: 'var(--ink-mid)',bg: 'var(--bg)',        border: 'var(--border)' },
}

function JobCard({ job }) {
  const [expanded, setExpanded] = useState(job.current)
  const c = COLOR_MAP[job.color] || COLOR_MAP.accent

  return (
    <div
      className={styles.card}
      style={{ borderLeftColor: c.text }}
    >
      {/* card header — always visible */}
      <div className={styles.cardTop}>
        <div className={styles.cardMeta}>
          <div className={styles.cardTitleRow}>
            <h3 className={styles.role}>{job.role}</h3>
            {job.current && (
              <span className={styles.currentBadge}>● Current</span>
            )}
          </div>
          <p className={styles.company} style={{ color: c.text }}>{job.company}</p>
          <p className={styles.period}>
            {job.period} &nbsp;·&nbsp; {job.location}
          </p>
        </div>

        <button
          className={styles.toggle}
          onClick={() => setExpanded(e => !e)}
          aria-label={expanded ? 'Collapse' : 'Expand'}
          style={{ color: c.text, borderColor: c.border, background: c.bg }}
        >
          {expanded ? '▲ Less' : '▼ More'}
        </button>
      </div>

      {/* expandable body */}
      {expanded && (
        <div className={styles.cardBody}>
          <ul className={styles.bullets}>
            {job.bullets.map((b, i) => (
              <li key={i}>
                <span className={styles.arrow} style={{ color: c.text }}>→</span>
                {b}
              </li>
            ))}
          </ul>
          <div className={styles.stack}>
            {job.stack.map(s => (
              <span
                key={s}
                className={styles.tag}
                style={{ color: c.text, background: c.bg, border: `1px solid ${c.border}` }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <p className="sec-label">// work_history</p>

        <Accordion
          title="Work Experience"
          subtitle={`${experience.length} roles · ${experience[experience.length - 1].period.split('–')[0].trim()} – Present · 10 years`}
          defaultOpen={true}
          accentColor="accent"
        >
          {/* timeline */}
          <div className={styles.timeline}>
            {experience.map((job, i) => (
              <div key={i} className={styles.timelineItem}>
                <div
                  className={styles.dot}
                  style={{ background: `var(--${job.color === 'muted' ? 'ink-light' : job.color})` }}
                />
                <div className={styles.lineWrap}>
                  {i < experience.length - 1 && <div className={styles.line} />}
                </div>
                <div className={styles.cardWrap}>
                  <JobCard job={job} />
                </div>
              </div>
            ))}
          </div>
        </Accordion>
      </div>
    </section>
  )
}
