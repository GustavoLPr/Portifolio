import React, { useState } from "react";
import * as styles from "./index.module.css";
import Logo from "../../assets/logoPretoCortado.png";
import LogoClara from "../../assets/logoBrancoCortado.png";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import {GiBrazilFlag} from "react-icons/gi"
import {LiaFlagUsaSolid} from "react-icons/lia"
import { useTheme } from "../../context/themeContext";

export default function Header() {
  // const [darkMode, setDarkMode] = useState("darkMode");
  const {darkMode, toggleTheme} = useTheme();
  const [languageMode, setLanguageMode] = useState("BR");

  // const mudarParaLightMode = () => {
  //   if (darkMode === "darkMode") {
  //     setDarkMode("lightMode");
  //   }
  // };

  // const mudarParaDarkMode = () => {
  //   if (darkMode === "lightMode") {
  //     setDarkMode("darkMode");
  //   }
  // };

  const mudarParaBR = () => {
    if (languageMode === "US") {
      setLanguageMode("BR");
    }
  };

  const mudarParaUS = () => {
    if (languageMode === "BR") {
      setLanguageMode("US");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.nameAreaLeft}>
          <div className={styles.logo}>
            {darkMode ? (
              <img
              src={Logo}
              alt="Gustavo Leal, Dev FullStack"
              className={styles.logo}
            />
            ) : (
              <img
              src={LogoClara}
              alt="Gustavo Leal, Dev FullStack"
              className={styles.logo}
            />
            )}
          </div>
        </div>
        <button
          onClick={toggleTheme}
          className={
            darkMode ? styles.darkModeLeft : styles.ligthModeLeft
          }
        >
          {darkMode ? (
            <MdDarkMode className={styles.moonIcon} />
          ) : (
            <MdLightMode className={styles.sunIcon} />
          )}
        </button>
            <div className={styles.languageChoice}>
              <button
                // className={styles.contratante}
                onClick={mudarParaBR}
                className={
                  languageMode === "BR"
                    ? styles.selecionadoBR
                    : styles.naoSelecionadoBR
                }
              >
                <GiBrazilFlag className={styles.br}/>
              </button>
              <button
                // className={styles.anunciante}
                onClick={mudarParaUS}
                className={
                  languageMode === "US"
                    ? styles.selecionadoUS
                    : styles.naoSelecionadoUS
                }
              >
                <LiaFlagUsaSolid className={styles.us}/> 
              </button>
            </div>

        {/* <button
          onClick={languageMode === "BR" ? mudarParaUS : mudarParaBR}
          className={
            languageMode === "BR" ? styles.brModeLeft : styles.usModeLeft
          }
        >
          Linguagem
        </button>
        <button onClick={languageMode === "US" ? mudarParaBR : mudarParaUs} className="">
          
        </button> */}
        {/* <div className={styles.languageLeft}>Linguagem </div> */}
      </div>
      <div className={styles.right}>
        <div className={styles.rotasRight}>
          <button className={styles.botaoInicio}>Inicio</button>
          <button className={styles.botaoSobre}>Sobre</button>
          <button className={styles.botaoTecnologias}>Tecnologias</button>
          <button className={styles.botaoProjetos}>Projetos</button>
          <button className={styles.botaoContato}>Contato</button>
          <button className={styles.botaoBaixar}>Baixar CV</button>
        </div>
      </div>
    </div>
  );
}
