import { useState } from 'react'
import styles from './Resume.module.css'

const RESUME_FILE = '/Rangan_Roy_Resume.pdf'

export default function Resume() {
  const [hovered, setHovered] = useState(false)

  return (
    <section id="resume" className={styles.section}>
      <div className="container">
        <p className="sec-label">// resume</p>

        <div className={styles.wrapper}>

          {/* ── Left: heading + download ── */}
          <div className={styles.left}>
            <h2 className={styles.heading}>My Resume</h2>
            <p className={styles.sub}>
              A full overview of my experience, skills, and accomplishments —
              available to view inline or download as a PDF.
            </p>

            <div className={styles.actions}>
              <a
                href={RESUME_FILE}
                download="Rangan_Roy_Resume.pdf"
                className={styles.btnDownload}
              >
                <span className={styles.btnIcon}>↓</span>
                Download PDF
              </a>
              <a
                href={RESUME_FILE}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnView}
              >
                <span className={styles.btnIcon}>↗</span>
                Open in new tab
              </a>
            </div>

            {/* meta chips */}
            <div className={styles.chips}>
              <div className={styles.chip}>
                <span className={styles.chipIcon}>📄</span>
                <span>PDF Format</span>
              </div>
              <div className={styles.chip}>
                <span className={styles.chipIcon}>🔄</span>
                <span>Updated 2025</span>
              </div>
              <div className={styles.chip}>
                <span className={styles.chipIcon}>✅</span>
                <span>ATS Optimised</span>
              </div>
            </div>
          </div>

          {/* ── Right: PDF preview ── */}
          <div
            className={`${styles.previewWrap} ${hovered ? styles.previewHovered : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className={styles.previewHeader}>
              <div className={styles.dots}>
                <span /><span /><span />
              </div>
              <span className={styles.previewTitle}>Rangan_Roy_Resume.pdf</span>
              <a
                href={RESUME_FILE}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.previewOpen}
              >
                ↗
              </a>
            </div>

            <div className={styles.pdfFrame}>
              <object
                data={RESUME_FILE}
                type="application/pdf"
                className={styles.pdfObject}
                aria-label="Rangan Roy Resume PDF"
              >
                {/* Fallback for browsers that can't render PDF inline */}
                <div className={styles.fallback}>
                  <p className={styles.fallbackIcon}>📄</p>
                  <p className={styles.fallbackText}>
                    Your browser doesn't support inline PDF preview.
                  </p>
                  <a
                    href={RESUME_FILE}
                    download="Rangan_Roy_Resume.pdf"
                    className={styles.fallbackBtn}
                  >
                    Download Resume
                  </a>
                </div>
              </object>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
