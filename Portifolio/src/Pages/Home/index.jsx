import React from "react";
import Header from "../../Components/Header/header";
import * as styles from "./index.module.css";
import Foto from "../../assets/foto.png";
import { PiHandWaving } from "react-icons/pi";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import {AiOutlineJava} from "react-icons/ai";
import {BiLogoReact} from "react-icons/bi";
import {BiLogoCss3} from "react-icons/bi";
import {BiLogoJavascript} from "react-icons/bi";
import {TbBrandReactNative} from "react-icons/tb";
import {BiLogoTypescript} from "react-icons/bi";
import {AiFillHtml5} from "react-icons/ai";
import {AiOutlinePython} from "react-icons/ai";
import {BiLogoPostgresql} from "react-icons/bi";
import {DiMysql} from "react-icons/di";
import {BiLogoPhp} from "react-icons/bi";
import {BiLogoSpringBoot} from "react-icons/bi";
import {SiDbeaver} from "react-icons/si";
import {BiLogoVisualStudio} from "react-icons/bi";
import {DiEclipse} from "react-icons/di";
import {BiLogoFigma} from "react-icons/bi";
import {SiPostman} from "react-icons/si";
import {BiLogoNodejs} from "react-icons/bi"
import CardFormacao from "../../Components/cardFormacao/cardFormacao";
import CardTecnologias from "../../Components/cardTecnologias/cardTecnologias";

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
      <div className={styles.sobre}>
        <div className={styles.sobreTitulo}>
          <div className={styles.linhaSobre}></div>
          <div className={styles.sobreTituloText}>Sobre</div>
          <div className={styles.linhaSobre}></div>
        </div>
        <div className={styles.contentSobre}>
          <div className={styles.esquerdaSobre}>
            <div className={styles.esquerdaSobreText}>
              Sou um desenvolvedor FullStack com experiência em FrontEnd e
              BackEnd, criando aplicações eficientes e escaláveis. Tenho
              conhecimento em React, TypeScript, React Native, JavaScript, Java,
              Python, PHP e Node.js, além de experiência com APIs REST, bancos
              de dados e segurança com Spring Security. Trabalho com boas
              práticas de código, versionamento com Git e integração de
              serviços. Busco sempre aprimorar minhas habilidades e entregar
              soluções inovadoras e de alta qualidade.
            </div>
          </div>
          <div className={styles.direitaSobre}>
            <div className={styles.formacoesTitle}>Formações</div>
            <CardFormacao
              title="Tecnologia da Informação e Comunicação"
              instituicao="FAETERJ Petrópolis"
              descricao="A FAETERJ Petrópolis (Faculdade de Educação Tecnológica do Estado do Rio de Janeiro - Unidade Petrópolis) é uma instituição pública de ensino superior.
Ela oferece cursos tecnológicos gratuitos, com foco na formação de profissionais qualificados para o mercado de trabalho. A FAETERJ Petrópolis é reconhecida por seu ensino de qualidade na área de tecnologia e inovação, especialmente em cursos como Sistemas de Informação e Análise e Desenvolvimento de Sistemas."
              status="cursando"
            />
            <CardFormacao
              title="Residência de ensino FullStack"
              instituicao="Serratec / Senai"
              descricao="O curso oferecido pelo Serratec tem foco em Desenvolvimento de Software, abordando linguagens de programação, banco de dados, metodologias ágeis e outras habilidades essenciais para atuar como programador."
              status="Encerrado"
            />
            <CardFormacao
              title="Desenvolvimento Web Completo"
              instituicao="Udemy"
              descricao="Um curso focado em  HTML5, CSS3, BootStrap 4, Java Script (ES6, ES7, ES8, ES9, ES10, ES11, ES12, ES13 e ES14), PHP, Orientação a Objetos, MySQL, PHP com PDO, Ajax, JQuery, MVC, APIs, IONIC, WordPress."
              status="cursando"
            />
            <CardFormacao
              title="Spring Boot 2025 REST API's"
              instituicao="Udemy"
              descricao="O curso ensina a criar APIs RESTful completas com Spring Boot 3.4 e Java 21, abordando segurança com JWT, banco de dados MySQL, testes automatizados, Docker, CI/CD e implantação em AWS e Google Cloud. Também cobre boas práticas, padrões de projeto e integração com ReactJS e ChatGPT."
              status="cursando"
            />
          </div>
        </div>
      </div>
      <div className={styles.tecnologias}>
        <div className={styles.tecnologiasTitulo}>
          <div className={styles.linhaTecnologias}></div>
          <div className={styles.tecnologiasTituloText}>Tecnologias</div>
          <div className={styles.linhaTecnologias}></div>
        </div>
        <div className={styles.tecnologiasContent}>
  <div className={styles.tecnologiasCategorias}>
    <div className={styles.categoriaBloco}>
      <div className={styles.titleTecnologias}>FrontEnd</div>
      <div className={styles.cardsLinha}>
        <CardTecnologias icon={BiLogoReact} title="React" />
        <CardTecnologias icon={TbBrandReactNative} title="React Native" />
        <CardTecnologias icon={BiLogoJavascript} title="JavaScript" />
        <CardTecnologias icon={BiLogoTypescript} title="TypeScript" />
        <CardTecnologias icon={AiFillHtml5} title="HTML" />
        <CardTecnologias icon={BiLogoCss3} title="CSS" />
      </div>
    </div>

    <div className={styles.categoriaBloco}>
      <div className={styles.titleTecnologias}>BackEnd</div>
      <div className={styles.cardsLinha}>
        <CardTecnologias icon={AiOutlineJava} title="Java" />
        <CardTecnologias icon={BiLogoSpringBoot} title="Spring Boot" />
        <CardTecnologias icon={BiLogoPhp} title="PHP" />
        <CardTecnologias icon={DiMysql} title="MySQL" />
        <CardTecnologias icon={BiLogoPostgresql} title="PostgreSQL" />
        <CardTecnologias icon={AiOutlinePython} title="Python" />
        <CardTecnologias icon={BiLogoNodejs} title="NodeJs" />

      </div>
    </div>

    <div className={styles.categoriaBloco}>
      <div className={styles.titleTecnologias}>Ferramentas</div>
      <div className={styles.cardsLinha}>
        <CardTecnologias icon={AiFillGithub} title="Git" />
        <CardTecnologias icon={SiPostman} title="PostMan" />
        <CardTecnologias icon={BiLogoFigma} title="Figma" />
        <CardTecnologias icon={DiEclipse} title="Eclipse" />
        <CardTecnologias icon={BiLogoVisualStudio} title="VS code" />
        <CardTecnologias icon={SiDbeaver} title="DBeaver" />

      </div>
    </div>
  </div>
</div>

      </div>
      <div className={styles.projetos}></div>
      <div className={styles.contato}></div>
    </div>
  );
}
