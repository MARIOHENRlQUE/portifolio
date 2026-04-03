import { profile } from "@/data/portfolio";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={`${styles.inner} container`}>
        <div className={styles.top}>
          <div className={styles.cta}>
            <span className={styles.label}>04 — Contato</span>
            <h2 className={styles.title}>
              Vamos construir
              <br />
              <span className={styles.accent}>algo juntos?</span>
            </h2>
            <p className={styles.sub}>
              Aberto a projetos de IA aplicada, arquitetura de sistemas e automação em escala.
              Me chame por qualquer canal abaixo.
            </p>

            <div className={styles.contacts}>
              <a href={`mailto:${profile.email}`} className={styles.contactItem}>
                <span className={styles.contactIcon}>✉</span>
                <div>
                  <p className={styles.contactLabel}>Email</p>
                  <p className={styles.contactValue}>{profile.email}</p>
                </div>
              </a>

              <a href={`tel:${profile.phone}`} className={styles.contactItem}>
                <span className={styles.contactIcon}>📱</span>
                <div>
                  <p className={styles.contactLabel}>Telefone</p>
                  <p className={styles.contactValue}>{profile.phone}</p>
                </div>
              </a>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <div>
                  <p className={styles.contactLabel}>Localização</p>
                  <p className={styles.contactValue}>{profile.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnLinkedin}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>

            <a href={`mailto:${profile.email}`} className={styles.btnEmail}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Enviar e-mail
            </a>

            <a
              href={profile.cvUrl}
              download
              className={styles.btnCv}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Baixar Currículo
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Mario Henrique
          </p>
          <a href="#hero" className={styles.backTop}>↑ Topo</a>
        </div>
      </div>
    </footer>
  );
}
