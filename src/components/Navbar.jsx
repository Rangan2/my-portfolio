import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['About', 'Skills', 'Experience', 'Awards', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <button className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className={styles.logoMono}>rr</span>
          <span className={styles.logoName}>Rangan Roy</span>
        </button>

        <ul className={styles.links}>
          {links.map(l => (
            <li key={l}>
              <button onClick={() => scrollTo(l)}>{l}</button>
            </li>
          ))}
          <li>
            <a
              href="mailto:rangan.roy.ivw@gmail.com"
              className={styles.ctaBtn}
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.x1 : ''} />
          <span className={menuOpen ? styles.x2 : ''} />
          <span className={menuOpen ? styles.x3 : ''} />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobile}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}>{l}</button>
          ))}
          <a href="mailto:rangan.roy.ivw@gmail.com">Hire Me</a>
        </div>
      )}
    </nav>
  )
}
