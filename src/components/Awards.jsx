import { awards, education } from '../data/data.js'
import Accordion from './Accordion.jsx'
import styles from './Awards.module.css'

export default function Awards() {
  return (
    <section id="awards" className={styles.section}>
      <div className="container">
        <p className="sec-label">// recognition</p>

        <Accordion
          title="Awards & Recognition"
          subtitle={`${awards.length} awards · EPAM · DBS Bank · Altimetrik`}
          defaultOpen={true}
          accentColor="gold"
        >
          <div className={styles.list}>
            {awards.map((a, i) => (
              <div key={i} className={styles.row}>
                <span className={styles.star}>★</span>
                <div className={styles.info}>
                  <p className={styles.title}>{a.title}</p>
                  <p className={styles.meta}>
                    <span className={styles.org}>{a.org}</span>
                    <span className={styles.dot}>·</span>
                    <span className={styles.year}>{a.year}</span>
                    <span className={styles.dot}>·</span>
                    <span className={styles.desc}>{a.desc}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Accordion>

        {/* Education — also collapsible */}
        <div style={{ marginTop: 12 }}>
          <Accordion
            title="Education"
            subtitle={education.school}
            defaultOpen={false}
            accentColor="purple"
          >
            <div className={styles.eduCard}>
              <p className={styles.eduDegree}>{education.degree}</p>
              <p className={styles.eduSchool}>{education.school}</p>
              <div className={styles.eduMeta}>
                <span>Graduated {education.year}</span>
                <span className={styles.dot}>·</span>
                <span>GPA {education.gpa}</span>
              </div>
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
