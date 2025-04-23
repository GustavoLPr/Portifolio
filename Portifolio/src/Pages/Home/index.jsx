import React from "react";
import Header from "../../Components/Header/header";
import * as styles from "./index.module.css";
import Foto from "../../assets/foto.png";
import { PiHandWaving } from "react-icons/pi";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.inicio}>
        <div className={styles.esquerdaInicio}>
          <div className={styles.textEsquerdaInicio}>
            <span className={styles.linha1}>
              Olá, visitante! <PiHandWaving />{" "}
            </span>{" "}
            <br />{" "}
            <span className={styles.linha2}>
              Meu nome é <span className={styles.nome}>Gustavo</span>
            </span>{" "}
            <br />{" "}
            <span className={styles.linha3}> Desenvolvedor FullStack</span>{" "}
            <br />
            <div className={styles.links}>
              <div className={styles.line}></div>
              <span className={styles.linkText}>
                <button className={styles.link}>
                  <AiFillGithub />
                </button>
                <button className={styles.link}>
                  <AiFillLinkedin />
                </button>
                <button className={styles.link}>
                  <AiOutlineMail />{" "}
                </button>
              </span>
              <div className={styles.line}></div>
            </div>
          </div>
          <div className={styles.scrollEsquerdaInicio}>
            <div className={styles.scroll}>S C R O L L</div>
            <div className={styles.scrollLine}></div>
          </div>
        </div>
        <div className={styles.direitaInicio}>
          <img
            src={Foto}
            alt="Imagem Gustavo"
            className={styles.fotoDireitaInicio}
          />
        </div>
      </div>
      <div className={styles.sobre}></div>
      <div className={styles.tecnologias}></div>
      <div className={styles.projetos}></div>
      <div className={styles.contato}></div>
    </div>
  );
}
