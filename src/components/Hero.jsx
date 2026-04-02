import { profile, stats } from '../data/data.js'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="about" className={styles.hero}>
      <div className={`container ${styles.inner}`}>

        {/* ── LEFT: text ── */}
        <div className={styles.text}>
          <p className={`${styles.prompt} fade-up d1`}>
            <span className={styles.dollar}>$</span> whoami
          </p>

          <h1 className={`${styles.name} fade-up d2`}>
            {profile.name}
          </h1>

          <p className={`${styles.title} fade-up d3`}>
            {profile.title} &nbsp;·&nbsp; {profile.tagline}
          </p>

          <p className={`${styles.summary} fade-up d4`}>
            {profile.summary}
          </p>

          {/* CTA row */}
          <div className={`${styles.ctas} fade-up d5`}>
            <button
              className={styles.btnPrimary}
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Experience
            </button>
            <a
              href="mailto:rangan.roy.ivw@gmail.com"
              className={styles.btnSecondary}
            >
              Get in Touch
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconBtn}
              title="LinkedIn"
            >
              in
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconBtn}
              title="LeetCode"
            >
              {'{ }'}
            </a>
          </div>

          {/* stat chips */}
          <div className={`${styles.stats} fade-up d6`}>
            {stats.map(s => (
              <div key={s.label} className={styles.chip}>
                <span className={styles.chipVal}>{s.value}</span>
                <span className={styles.chipLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: photo ── */}
        <div className={`${styles.photoWrap} fade-in d3`}>
          <div className={styles.photoRing}>
            <img
              src={profile.photo}
              alt={profile.name}
              className={styles.photo}
            />
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Available for Senior Roles
          </div>
        </div>

      </div>
    </section>
  )
}
