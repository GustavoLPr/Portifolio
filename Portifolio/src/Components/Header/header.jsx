import React, { useCallback, useEffect, useState, useTransition } from "react";
import * as styles from "./index.module.css";
import Logo from "../../assets/logoPretoCortado.png";
import LogoClara from "../../assets/logoBrancoCortado.png";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { useTheme } from "../../context/themeContext";
import { useTranslation } from "react-i18next";

export default function Header() {
  //////////////////////////////////DARKMODE////////////////////////////////////////////////////
  // const [darkMode, setDarkMode] = useState("darkMode");
  const { darkMode, toggleTheme } = useTheme();

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

  //////////////////////////////////////LINGUAGEM//////////////////////////////////////////////////////

  // const { i18n, t } = useTranslation();
  // const [languageSelected, setLanguageSelected] = useState(i18n.language);

  // const handleChangeLanguage = useCallback((language) => {
  //   i18n.changeLanguage(language);
  //   setLanguageSelected(language);
  // }, []);

  // const [languageMode, setLanguageMode] = useState("BR");

  // const mudarParaBR = () => {
  //   if (languageMode === "US") {
  //     setLanguageMode("BR");
  //   }
  // };

  // const mudarParaUS = () => {
  //   if (languageMode === "BR") {
  //     setLanguageMode("US");
  //   }
  // };

  const { i18n, t } = useTranslation();
  const [languageMode, setLanguageMode] = useState(i18n.language); // pt-BR ou en-US

  // Atualiza linguagem do i18n ao trocar o modo
  const handleChangeLanguage = useCallback((language) => {
    i18n.changeLanguage(language);
    setLanguageMode(language);
  }, [i18n]);

  // Garante que o estado inicial bate com o i18n
  useEffect(() => {
    setLanguageMode(i18n.language);
  }, [i18n.language]);

  const mudarParaBR = () => {
    if (languageMode !== 'pt-BR') {
      handleChangeLanguage('pt-BR');
    }
  };

  const mudarParaUS = () => {
    if (languageMode !== 'en-US') {
      handleChangeLanguage('en-US');
    }
  };

  ////////////////////////////////CURRUCULO/////////////////////////////////////////
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Curriculo.pdf";
    link.download = "CurriculoGustavo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  return (
    <div className={styles.headerContainer}>
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
          className={darkMode ? styles.darkModeLeft : styles.ligthModeLeft}
        >
          {darkMode ? (
            <MdDarkMode className={styles.moonIcon} />
          ) : (
            <MdLightMode className={styles.sunIcon} />
          )}
        </button>
        <div className={styles.languageChoice}>
          {/* <button
            // className={styles.contratante}
            onClick={mudarParaBR}
            className={
              languageMode === "BR"
                ? styles.selecionadoBR
                : styles.naoSelecionadoBR
            }
          >
            <GiBrazilFlag className={styles.br} />
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
            <LiaFlagUsaSolid className={styles.us} />
          </button> */}
          <button
        onClick={mudarParaBR}
        className={
          languageMode === 'pt-BR'
            ? styles.selecionadoBR
            : styles.naoSelecionadoBR
        }
      >
        <GiBrazilFlag className={styles.br} />
      </button>
      <button
        onClick={mudarParaUS}
        className={
          languageMode === 'en-US'
            ? styles.selecionadoUS
            : styles.naoSelecionadoUS
        }
      >
        <LiaFlagUsaSolid className={styles.us} />
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
          <button
            className={styles.botaoInicio}
            onClick={() => {
              const el = document.getElementById("inicio");
              if (el) {
                const offsetTop = el.offsetTop;
                window.scrollTo({
                  top: offsetTop - 100, 
                  behavior: "smooth",
                });
              }
            }}
          >
            {t('Inicio')}
          </button>
          <button
            className={styles.botaoSobre}
            onClick={() => {
              const el = document.getElementById("sobre");
              if (el) {
                const offsetTop = el.offsetTop;
                window.scrollTo({
                  top: offsetTop - 5, 
                  behavior: "smooth",
                });
              }
            }}
          >
            {t('Sobre')}
          </button>
          <button
            className={styles.botaoTecnologias}
            onClick={() => {
              const el = document.getElementById("tecnologias");
              if (el) {
                const offsetTop = el.offsetTop;
                window.scrollTo({
                  top: offsetTop - 100, 
                  behavior: "smooth",
                });
              }
            }}
          >
            {t('Tecnologias')} 
          </button>
          <button
            className={styles.botaoProjetos}
            onClick={() => {
              const el = document.getElementById("projetos");
              if (el) {
                const offsetTop = el.offsetTop;
                window.scrollTo({
                  top: offsetTop - 100, 
                  behavior: "smooth",
                });
              }
            }}
          >
            {t('Projetos')}
          </button>
          <button
            className={styles.botaoContato}
            onClick={() => {
              const el = document.getElementById("contato");
              if (el) {
                const offsetTop = el.offsetTop;
                window.scrollTo({
                  top: offsetTop - 100, 
                  behavior: "smooth",
                });
              }
            }}
          >
            {t('Contato')}
          </button>
          <button className={styles.botaoBaixar} onClick={handleDownload}>
            {t('Baixar CV')}
          </button>
        </div>
      </div>
    </div>
  );
}
