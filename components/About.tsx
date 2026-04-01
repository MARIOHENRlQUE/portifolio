import { profile, experiences } from "@/data/portfolio";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>01 — Sobre</span>
          <h2 className={styles.title}>Quem é Mario Henrique</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.text}>
            {profile.about.map((p, i) => (
              <p key={i} className={styles.para}>{p}</p>
            ))}

            <div className={styles.edu}>
              <span className={styles.eduIcon}>🎓</span>
              <div>
                <p className={styles.eduTitle}>Engenharia de Software — UNIFAN</p>
                <p className={styles.eduSub}>2022 — 2026 · 8º semestre</p>
              </div>
            </div>

            <div className={styles.langs}>
              <div className={styles.langItem}>
                <span className={styles.langFlag}>🇧🇷</span>
                <div>
                  <p className={styles.langName}>Português</p>
                  <p className={styles.langLevel}>Nativo</p>
                </div>
              </div>
              <div className={styles.langItem}>
                <span className={styles.langFlag}>🇺🇸</span>
                <div>
                  <p className={styles.langName}>Inglês</p>
                  <p className={styles.langLevel}>Intermediário · leitura técnica fluente</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.timeline}>
            <h3 className={styles.timelineTitle}>Experiência</h3>
            <div className={styles.entries}>
              {experiences.map((exp, i) => (
                <div key={i} className={`${styles.entry} ${exp.current ? styles.current : ""}`}>
                  <div className={styles.entryDot} />
                  <div className={styles.entryContent}>
                    <p className={styles.entryRole}>{exp.role}</p>
                    <p className={styles.entryCompany}>{exp.company}</p>
                    <p className={styles.entryPeriod}>{exp.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
