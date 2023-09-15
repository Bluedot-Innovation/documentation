import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from "./styles.module.css";

export default function Card({ icon, description, title, link }) {
  return (
    <a className={styles.linkWrapper} href={useBaseUrl(link)}>
    <div className={styles.cardWrapper}>
      <div className={styles.icon}>
        <img src={useBaseUrl(icon)} alt={title} className={styles.icon} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
    </a>
  );
}
