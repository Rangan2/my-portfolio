import { useState } from 'react'
import styles from './Accordion.module.css'

export default function Accordion({ title, subtitle, defaultOpen = false, children, accentColor }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={styles.wrap}>
      <button
        className={`${styles.header} ${open ? styles.open : ''}`}
        onClick={() => setOpen(o => !o)}
        style={open ? { borderColor: `var(--${accentColor || 'accent'})` } : {}}
      >
        <div className={styles.left}>
          <span
            className={styles.chevron}
            style={{ color: `var(--${accentColor || 'accent'})` }}
          >
            {open ? '▼' : '▶'}
          </span>
          <div className={styles.titles}>
            <span className={styles.title}>{title}</span>
            {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
          </div>
        </div>
        <span
          className={styles.hint}
          style={{ color: `var(--${accentColor || 'accent'})` }}
        >
          {open ? 'collapse ↑' : 'expand ↓'}
        </span>
      </button>

      {open && (
        <div className={styles.body}>
          {children}
        </div>
      )}
    </div>
  )
}
