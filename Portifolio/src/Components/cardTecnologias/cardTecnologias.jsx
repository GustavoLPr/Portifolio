import React from 'react'
import * as styles from "./index.module.css";

export default function cardTecnologias({icon: Icon, title}) {
  return (
    <div className={styles.containerCardTecnologias}>
        <div className={styles.icon}> <Icon/> </div>
        <div className={styles.title}>{title}</div>
    </div>
  )
}
