import { skillGroups } from '../data/data.js'
import Accordion from './Accordion.jsx'
import styles from './Skills.module.css'

const COLOR_MAP = {
  accent: { text: 'var(--accent)', bg: 'var(--accent-bg)', border: 'rgba(10,99,224,.25)' },
  green:  { text: 'var(--green)',  bg: 'var(--green-bg)',  border: 'rgba(12,165,100,.25)' },
  purple: { text: 'var(--purple)', bg: 'var(--purple-bg)', border: 'rgba(115,49,203,.25)' },
  gold:   { text: 'var(--gold)',   bg: 'var(--gold-bg)',   border: 'rgba(176,126,4,.25)' },
  red:    { text: 'var(--red)',    bg: 'var(--red-bg)',    border: 'rgba(209,40,40,.25)' },
}

function Pill({ label, color }) {
  const c = COLOR_MAP[color] || COLOR_MAP.accent
  return (
    <span
      className={styles.pill}
      style={{ color: c.text, background: c.bg, border: `1px solid ${c.border}` }}
    >
      {label}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <p className="sec-label">// technical_skills</p>

        <Accordion
          title="Tech Stack"
          subtitle={skillGroups.map(g => g.title).join(' · ')}
          defaultOpen={true}
          accentColor="accent"
        >
          <div className={styles.grid}>
            {skillGroups.map(g => (
              <div key={g.title} className={styles.group}>
                <p
                  className={styles.groupTitle}
                  style={{ color: `var(--${g.color})` }}
                >
                  {g.title}
                </p>
                <div className={styles.pills}>
                  {g.items.map(item => (
                    <Pill key={item} label={item} color={g.color} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Accordion>
      </div>
    </section>
  )
}
