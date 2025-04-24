import React from 'react'
import * as styles from "./index.module.css";

export default function CardFormacao({title, instituicao, descricao, status}) {
  return (
    <div className={styles.containerCardFormacao}>
        <div className={styles.title}>{title}</div>
        <div className={styles.instituicao}>{instituicao}</div>
        <div className={styles.descricao}>{descricao}</div>
        <div className={styles.status}>{status}</div>
    </div>
  )
}
