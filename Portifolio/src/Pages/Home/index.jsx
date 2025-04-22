import React from "react";
import Header from "../../Components/Header/header";
import * as styles from "./index.module.css";


export default function Home() {
 

  return (
      <div className={styles.container}>
        <Header />
        teste texto
        <button className={styles.botao}>teste botao</button>
      </div>
  );
}
