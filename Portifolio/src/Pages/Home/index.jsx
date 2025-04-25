import React, { useRef } from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import * as styles from "./index.module.css";
import Foto from "../../assets/foto.png";
import { PiHandWaving } from "react-icons/pi";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineJava } from "react-icons/ai";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { AiOutlinePython } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { BiLogoPhp } from "react-icons/bi";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiDbeaver } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiEclipse } from "react-icons/di";
import { BiLogoFigma } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { BiLogoNodejs } from "react-icons/bi";
import CardFormacao from "../../Components/cardFormacao/cardFormacao";
import CardTecnologias from "../../Components/cardTecnologias/cardTecnologias";
import CardProjetos from "../../Components/cardProjetos/cardProjetos";
import emailjs from '@emailjs/browser';


export default function Home() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('gmailService', 'template_vtl9e6l', form.current, {
        publicKey: 'JWJsK5YBzJhcV4fyP',
      })
      .then(
        () => {
          alert('Seu Email foi enviado com sucesso');
        },
        (error) => {
          alert('Seu Email não foi enviado, tente outra hora');
          console.error(error.text);
        },
      );
      e.target.reset();
  };
  
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.inicio} id="inicio">
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
                <button className={styles.link} onClick={() => window.open("https://github.com/GustavoLPr", "_blank")}>
                  <AiFillGithub />
                </button>
                <button className={styles.link} onClick={() => window.open("https://www.linkedin.com/in/gustavo-leal-256867297/", "_blank")}>
                  <AiFillLinkedin />
                </button>
                <button className={styles.link} onClick={() => window.open("mailto:gustavolealprado.silva@gmail.com", "_blank")}>
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
      <div className={styles.sobre} id="sobre">
        <div className={styles.separacao}>
          <div className={styles.linha}></div>
          <div className={styles.titulo}>Sobre</div>
          <div className={styles.linha}></div>
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
      <div className={styles.tecnologias} id="tecnologias">
        <div className={styles.separacao}>
          <div className={styles.linha}></div>
          <div className={styles.titulo}>Tecnologias</div>
          <div className={styles.linha}></div>
        </div>
        <div className={styles.tecnologiasContent}>
          <div className={styles.tecnologiasCategorias}>
            <div className={styles.categoriaBloco}>
              <div className={styles.titleTecnologias}>FrontEnd</div>
              <div className={styles.cardsLinha}>
                <CardTecnologias icon={BiLogoReact} title="React" />
                <CardTecnologias
                  icon={TbBrandReactNative}
                  title="React Native"
                />
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
      <div className={styles.projetos} id="projetos">
        <div className={styles.separacao}>
          <div className={styles.linha}></div>
          <div className={styles.titulo}>Projetos</div>
          <div className={styles.linha}></div>
        </div>
        <div className={styles.projetosContent}>
          <CardProjetos
            title="Hospedagem"
            descricao="Um site feito para manutenção de hospedagem, podendo ser feito reservas com o login de usuário, ou fazer manutenções nos hospedes e quartos com o login de ADM."
            tags={["React", "Node", "CSS", "java", "JavaScript", "ReactNative"]}
          />
          <CardProjetos
            title="Hospedagem"
            descricao="Um site feito para manutenção de hospedagem, podendo ser feito reservas com o login de usuário, ou fazer manutenções nos hospedes e quartos com o login de ADM."
            tags={["React", "Node", "CSS", "java", "JavaScript", "ReactNative"]}
          />
        </div>
      </div>
      <div className={styles.contato} id="contato">
        <div className={styles.separacao}>
          <div className={styles.linha}></div>
          <div className={styles.titulo}>Contato</div>
          <div className={styles.linha}></div>
        </div>
        <div className={styles.contentContato}>
          <div className={styles.textContato}>Tem alguma duvida ou deseja contratar meus serviços?</div>
          <form ref={form} className={styles.formContato} onSubmit={sendEmail}>
            <div className={styles.formL1}>
              <input type="text" placeholder="Seu nome" className={styles.l1} name="nome" />
              <input type="email" placeholder="Seu email" className={styles.l1} name="email"/>
            </div>
            <div className={styles.formL2 }>
              <input type="text" placeholder="Assunto da mensagem" className={styles.l2} name="assunto"/>
            </div>
            <div className={styles.formL3}>
              <textarea type="text" placeholder="Sua mensagem" className={styles.l3} name="mensagem"></textarea>
            </div>
          <div className={styles.botaoContato}>
            <button className={styles.botaoEnviar} onSubmit={sendEmail}>Enviar</button>
          </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
