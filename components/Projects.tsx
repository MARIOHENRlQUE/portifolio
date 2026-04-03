import { projects } from "@/data/portfolio";
import styles from "./Projects.module.css";

const statusMap = {
  "production": { label: "Em Produção", color: "#4ade80" },
  "r&d": { label: "R&D", color: "#facc15" },
  "open-source": { label: "Open Source", color: "#60a5fa" },
};

export default function Projects() {
  return (
    <section id="projetos" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>03 — Projetos</span>
          <h2 className={styles.title}>O que construí</h2>
          <p className={styles.sub}>
            Sistemas reais, em produção — com impacto mensurável.
          </p>
        </div>

        <div className={styles.list}>
          {projects.map((project, i) => {
            const status = statusMap[project.status];
            return (
              <article key={i} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.meta}>
                    <span
                      className={styles.status}
                      style={{ "--status-color": status.color } as React.CSSProperties}
                    >
                      <span className={styles.statusDot} />
                      {status.label}
                    </span>
                    <span className={styles.number}>0{i + 1}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardSub}>{project.subtitle}</p>
                </div>

                <div className={styles.cardBody}>
                  <p className={styles.desc}>{project.description}</p>

                  <ul className={styles.highlights}>
                    {project.highlights.map((h, j) => (
                      <li key={j} className={styles.highlight}>
                        <span className={styles.arrow}>→</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.stack}>
                    {project.stack.map((tech) => (
                      <span key={tech} className={styles.tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {/* Add project hint
        <div className={styles.addHint}>
          <p>
            💡 Para adicionar um projeto, edite o array <code>projects</code> em{" "}
            <code>data/portfolio.ts</code>
          </p>
        </div> */}
      </div>
    </section>
  );
}
