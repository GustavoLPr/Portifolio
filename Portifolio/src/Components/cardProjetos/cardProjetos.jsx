import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import * as styles from "./index.module.css";

export default function CardProjetos({ title, descricao, tags }) {
  return (
    <button className={styles.containerCardProjetos}>
      <div className={styles.image}></div>
      <div className={styles.title}>{title}</div>
      <div className={styles.descricao}>{descricao}</div>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>{tag}</span>
        ))}
      </div>
      <button className={styles.linkGit}><AiFillGithub /></button>
    </button>
  );
}
