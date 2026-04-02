import { profile } from '../data/data.js'
import styles from './Contact.module.css'

const links = [
  { icon: '✉', label: 'Email', value: profile.email,    href: `mailto:${profile.email}` },
  { icon: 'in', label: 'LinkedIn', value: 'rangan-roy', href: profile.linkedin, mono: true },
  { icon: '{ }', label: 'LeetCode', value: 'rroy94',    href: profile.leetcode, mono: true },
  { icon: '☎', label: 'Phone',   value: profile.phone,  href: `tel:${profile.phone}` },
]

export default function Contact() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <p className="sec-label">// get_in_touch</p>

        <div className={styles.top}>
          <div>
            <h2 className={styles.heading}>Let's Connect</h2>
            <p className={styles.sub}>
              Open to senior engineering roles, consulting, and interesting collaborations.
            </p>
          </div>
          <a href={`mailto:${profile.email}`} className={styles.bigBtn}>
            Say Hello →
          </a>
        </div>

        <div className={styles.cards}>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={styles.card}
            >
              <span className={`${styles.icon} ${l.mono ? styles.mono : ''}`}>{l.icon}</span>
              <div>
                <p className={styles.cardLabel}>{l.label}</p>
                <p className={styles.cardValue}>{l.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Rangan Roy &nbsp;·&nbsp;
            Built with React + Vite &nbsp;·&nbsp; Deployed on Vercel
          </p>
          <p className={styles.madeWith}>
            <span className={styles.mono}>{'<'}</span>
            Made with care
            <span className={styles.mono}>{'/>'}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
