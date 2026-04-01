import { stackGroups } from "@/data/portfolio";
import styles from "./Stack.module.css";

export default function Stack() {
  return (
    <section id="stack" className={styles.section}>
      <div className={styles.bg} aria-hidden="true" />
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>02 — Stack</span>
          <h2 className={styles.title}>Tecnologias & Ferramentas</h2>
          <p className={styles.sub}>
            Do modelo ao produto — com a infraestrutura certa para escalar.
          </p>
        </div>

        <div className={styles.grid}>
          {stackGroups.map((group) => (
            <div key={group.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{group.icon}</span>
                <h3 className={styles.cardTitle}>{group.title}</h3>
              </div>
              <ul className={styles.tags}>
                {group.items.map((item) => (
                  <li key={item} className={styles.tag}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
