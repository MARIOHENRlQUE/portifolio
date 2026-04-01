"use client";
import { profile } from "@/data/portfolio";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Background grid */}
      <div className={styles.grid} aria-hidden="true" />
      {/* Glow blobs */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      <div className={`${styles.inner} container`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span className={styles.dot} />
            Disponível para projetos remotos
          </p>

          <h1 className={styles.heading}>
            <span className={styles.name}>{profile.name}</span>
            <br />
            <span className={styles.role}>{profile.role}</span>
          </h1>

          <p className={styles.sub}>{profile.roleSecondary}</p>

          <p className={styles.pitch}>{profile.pitch}</p>

          <div className={styles.ctas}>
            <a href="#projetos" className={styles.btnPrimary}>
              Ver projetos
            </a>
            <a href="#contato" className={styles.btnSecondary}>
              Entrar em contato
            </a>
          </div>

          <div className={styles.stats}>
            {profile.stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.photoWrap}>
          <div className={styles.photoFrame}>
            {/* Substitua /photo.jpg pela sua foto em /public/photo.jpg */}
            <img
              src={profile.photo}
              alt={profile.name}
              className={styles.photo}
              onError={(e) => {
                // Fallback: mostra placeholder se foto não encontrada
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                target.parentElement!.classList.add("no-photo");
              }}
            />
            <div className={styles.photoPlaceholder} aria-hidden="true">
              <span>MH</span>
            </div>
          </div>
          <div className={styles.photoGlow} aria-hidden="true" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scroll}>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
