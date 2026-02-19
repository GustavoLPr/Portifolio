import { React, useRef, useTransition } from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import * as styles from "./index.module.css";
import Foto from "../../assets/foto.png";
import Print3 from "../../assets/print3.png";
import Print4 from "../../assets/print4.png";
import Print5 from "../../assets/print5.png";
import Print6 from "../../assets/print6.png";
import Estrutura from "../../assets/estrutura.png";
import Login from "../../assets/login.png";
import Funcionarios from "../../assets/funcionarios.png";
import Hospedes from "../../assets/hospedes.png";
import Hospedagens from "../../assets/hospedagens.png";
import Historico from "../../assets/historico.png";
import Quartos from "../../assets/Quartos.png";
import Tabela from "../../assets/Tabela.png";
import Fase1 from "../../assets/fase1.png";
import Fase2 from "../../assets/fase2.png";
import Fase3 from "../../assets/fase3.png";
import Diagrama from "../../assets/diagramaDesabafa.png";
import Prototipo from "../../assets/prototipoDesabafa.png";
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
// import CardProjetos from "../../Components/cardProjetos/cardProjetos";
import emailjs from "@emailjs/browser";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import CardProjetosV2 from "../../Components/cardPojetosV2/cardProjetosV2";
import { Pagination, EffectCreative, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "../../Styles/global.css";

export default function Home() {
  const { t } = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const nome = form.current.nome.value.trim();
    const email = form.current.email.value.trim();
    const assunto = form.current.assunto.value.trim();
    const mensagem = form.current.mensagem.value.trim();

    if (!nome || !email || !assunto || !mensagem) {
      alert(t("Por favor, preencha todos os campos antes de enviar."));
      return;
    }

    emailjs
      .sendForm("gmailService", "template_vtl9e6l", form.current, {
        publicKey: "JWJsK5YBzJhcV4fyP",
      })
      .then(
        () => {
          alert(t("Seu Email foi enviado com sucesso!"));
        },
        (error) => {
          alert(t("Seu Email não foi enviado, tente outra hora"));
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
              {t("Olá, visitante!")} <PiHandWaving />{" "}
            </span>{" "}
            <br />{" "}
            <span className={styles.linha2}>
              {t("Meu nome é")} <span className={styles.nome}>Gustavo</span>
            </span>{" "}
            <br />{" "}
            <span className={styles.linha3}>
              {" "}
              {t("Desenvolvedor FullStack")}
            </span>{" "}
            <br />
            <div className={styles.links}>
              <div className={styles.line}></div>
              <span className={styles.linkText}>
                <button
                  className={styles.link}
                  onClick={() =>
                    window.open("https://github.com/GustavoLPr", "_blank")
                  }
                >
                  <AiFillGithub />
                </button>
                <button
                  className={styles.link}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/gustavo-leal-256867297/",
                      "_blank",
                    )
                  }
                >
                  <AiFillLinkedin />
                </button>
                <button
                  className={styles.link}
                  onClick={() =>
                    window.open(
                      "mailto:gustavolealprado.silva@gmail.com",
                      "_blank",
                    )
                  }
                >
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
          <div className={styles.titulo}>{t("Sobre")}</div>
          <div className={styles.linha}></div>
        </div>
        {/* <div className={styles.contentSobre}>
          <div className={styles.esquerdaSobre}>
            <div className={styles.esquerdaSobreText}>
              {t(
                "Sou um desenvolvedor FullStack com experiência em FrontEnd e BackEnd, criando aplicações eficientes e escaláveis. Tenho conhecimento em React, TypeScript, React Native, JavaScript, Java, Python, PHP e Node.js, além de experiência com APIs REST, bancos de dados e segurança com Spring Security. Trabalho com boas práticas de código, versionamento com Git e integração de serviços. Busco sempre aprimorar minhas habilidades e entregar soluções inovadoras e de alta qualidade."
              )}
            </div>
          </div>
          <div className={styles.direitaSobre}>
            <CardFormacao
              title={t("Tecnologia da Informação e Comunicação")}
              instituicao="FAETERJ Petrópolis"
              descricao={t(
                "A FAETERJ Petrópolis (Faculdade de Educação Tecnológica do Estado do Rio de Janeiro - Unidade Petrópolis) é uma instituição pública de ensino superior. Ela oferece cursos tecnológicos gratuitos, com foco na formação de profissionais qualificados para o mercado de trabalho. A FAETERJ Petrópolis é reconhecida por seu ensino de qualidade na área de tecnologia e inovação, especialmente em cursos como Sistemas de Informação e Análise e Desenvolvimento de Sistemas."
              )}
              status={t("cursando")}
            />
            <CardFormacao
              title={t("Residência de ensino FullStack")}
              instituicao="Serratec / Senai"
              descricao={t(
                "O curso oferecido pelo Serratec tem foco em Desenvolvimento de Software, abordando linguagens de programação, banco de dados, metodologias ágeis e outras habilidades essenciais para atuar como programador."
              )}
              status={t("Completo")}
            />
            <CardFormacao
              title={t("Desenvolvimento Web Completo")}
              instituicao="Udemy"
              descricao={t(
                "Um curso focado em HTML5, CSS3, BootStrap 4, Java Script (ES6, ES7, ES8, ES9, ES10, ES11, ES12, ES13 e ES14), PHP, Orientação a Objetos, MySQL, PHP com PDO, Ajax, JQuery, MVC, APIs, IONIC, WordPress."
              )}
              status={t("cursando")}
            />
            <CardFormacao
              title="Spring Boot 2025 REST API's"
              instituicao="Udemy"
              descricao={t(
                "O curso ensina a criar APIs RESTful completas com Spring Boot 3.4 e Java 21, abordando segurança com JWT, banco de dados MySQL, testes automatizados, Docker, CI/CD e implantação em AWS e Google Cloud. Também cobre boas práticas, padrões de projeto e integração com ReactJS e ChatGPT."
              )}
              status={t("cursando")}
            />
          </div>
        </div> */}

{/* //////////////////NOVO////////////// */}
        <div className={styles.contentSobre}>
          <div className={styles.textArea}>
            {t(
              "Sou um desenvolvedor FullStack com experiência em FrontEnd e BackEnd, criando aplicações eficientes e escaláveis. Tenho conhecimento em React, TypeScript, React Native, JavaScript, Java, Python, PHP e Node.js, além de experiência com APIs REST, bancos de dados e segurança com Spring Security. Trabalho com boas práticas de código, versionamento com Git e integração de serviços. Busco sempre aprimorar minhas habilidades e entregar soluções inovadoras e de alta qualidade.",
            )}
          </div>
          <div className={styles.cardArea}>
            <CardFormacao
              title={t("Tecnologia da Informação e Comunicação")}
              instituicao="FAETERJ Petrópolis"
              descricao={t(
                "A FAETERJ Petrópolis (Faculdade de Educação Tecnológica do Estado do Rio de Janeiro - Unidade Petrópolis) é uma instituição pública de ensino superior. Ela oferece cursos tecnológicos gratuitos, com foco na formação de profissionais qualificados para o mercado de trabalho. A FAETERJ Petrópolis é reconhecida por seu ensino de qualidade na área de tecnologia e inovação, especialmente em cursos como Sistemas de Informação e Análise e Desenvolvimento de Sistemas.",
              )}
              status={t("Cursando")}
            />
            <CardFormacao
              title={t("Residência de ensino FullStack")}
              instituicao="Serratec / Senai"
              descricao={t(
                "O curso oferecido pelo Serratec tem foco em Desenvolvimento de Software, abordando linguagens de programação, banco de dados, metodologias ágeis e outras habilidades essenciais para atuar como programador.",
              )}
              status={t("Completo")}
            />
            <CardFormacao
              title={t("Desenvolvimento Web Completo")}
              instituicao="Udemy"
              descricao={t(
                "Um curso focado em HTML5, CSS3, BootStrap 4, Java Script (ES6, ES7, ES8, ES9, ES10, ES11, ES12, ES13 e ES14), PHP, Orientação a Objetos, MySQL, PHP com PDO, Ajax, JQuery, MVC, APIs, IONIC, WordPress.",
              )}
              status={t("Cursando")}
            />
            <CardFormacao
              title="Spring Boot 2025 REST API's"
              instituicao="Udemy"
              descricao={t(
                "O curso ensina a criar APIs RESTful completas com Spring Boot 3.4 e Java 21, abordando segurança com JWT, banco de dados MySQL, testes automatizados, Docker, CI/CD e implantação em AWS e Google Cloud. Também cobre boas práticas, padrões de projeto e integração com ReactJS e ChatGPT.",
              )}
              status={t("Cursando")}
            />
          </div>
        </div>
      </div>
      <div className={styles.tecnologias} id="tecnologias">
        <div className={styles.separacao}>
          <div className={styles.linha}></div>
          <div className={styles.titulo}>{t("Tecnologias")}</div>
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
              <div className={styles.titleTecnologias}>{t("Ferramentas")}</div>
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
          <div className={styles.titulo}>{t("Projetos")}</div>
          <div className={styles.linha}></div>
        </div>
        <div className={styles.projetosContent}>
          <Swiper
            className={styles.projetosContentSlide}
            spaceBetween={30}
            centeredSlides={true} // Centraliza os slides
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            grabCursor={true}
            pagination={{ dynamicBullets: false }}
            modules={[Pagination, EffectCreative, Navigation]}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
          >
            <SwiperSlide>
              <CardProjetosV2
                titleCard={t("Jogo de Plataforma 2D")}
                descricaoCard={t("Este projeto é um Jogo de Plataforma 2D desenvolvido com o objetivo de aplicar conceitos fundamentais de computação gráfica e lógica de desenvolvimento de jogos. A aplicação permite controlar um personagem em um ambiente bidimensional, com movimentação lateral e salto, além de simular gravidade e física básica para garantir um comportamento mais realista. O sistema também realiza a detecção de colisões entre o personagem e os elementos do cenário, como plataformas e chão, enquanto renderiza gráficos em tempo real por meio de primitivas do OpenGL e exibe informações na tela, como o estado do jogo e mensagens ao jogador. Sua estrutura é organizada em módulos responsáveis pela lógica do jogo — incluindo movimentação, física e colisão —, pela renderização gráfica utilizando OpenGL e FreeGLUT, e pelo tratamento de eventos de teclado, além do controle do loop principal da aplicação.")}
                tags={[
                  "C++",
                  "OpenGL",
                  "FreeGLUT",
                  "STL",
                  "Chrono",
                  "Console/IO",
                  "Aplicação Gráfica",
                ]}
                imagens1={[Fase2, Fase3]}
                imagens2={[Fase1]}
                link={"https://github.com/GustavoLPr/Jogo-de-Plataforma.git"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardProjetosV2
                titleCard={t("Gerenciamento de Hospedem")}
                descricaoCard={t("Este projeto é um Sistema de Gerenciamento de Hotel/Pousada desenvolvido para centralizar e otimizar todas as operações principais do estabelecimento. A aplicação permite o gerenciamento completo de funcionários, incluindo cadastro, edição, listagem e autenticação, além do controle de hóspedes com possibilidade de busca por ID, CPF, nome ou quarto associado. O sistema também realiza a gestão de quartos, administrando tipo, preço e status (livre ou ocupado), bem como o controle das hospedagens, contemplando check-in, check-out, edição de informações e o vínculo entre hóspede e quarto. Além disso, mantém um histórico detalhado de logs de entradas e saídas, garantindo auditoria e rastreabilidade das ações realizadas. A solução é estruturada em duas camadas principais: um Backend em formato de API REST responsável pelas regras de negócio e persistência dos dados, e um Frontend Desktop desenvolvido em Python com interface gráfica, que consome a API e proporciona uma utilização simples e intuitiva. O projeto segue uma arquitetura organizada, com separação clara de responsabilidades entre controllers, schemas e telas, facilitando manutenção, testes e futuras expansões.")}
                tags={[
                  "FullStack",
                  "Python",
                  "Flask",
                  "Flask-RESTful",
                  "Marshmallow",
                  "SQLAlchemy",
                  "PostgreSQL",
                  "Venv",
                  "Tkinter",
                ]}
                imagens1={[Funcionarios, Quartos, Tabela]}
                imagens2={[Hospedes, Historico, Hospedagens]}
                link={"https://github.com/GustavoLPr/Hospedagem.git"}
              />
            </SwiperSlide>

            <SwiperSlide>
              <CardProjetosV2
                titleCard={t("Desabafa")}
                descricaoCard={t("Este projeto é uma plataforma web desenvolvida para permitir que pessoas façam desabafos de forma anônima, identificados apenas por sua localização aproximada (cidade/estado) por meio de um mapa-múndi interativo. O sistema possibilita que qualquer pessoa compartilhe sentimentos, pensamentos ou experiências sem revelar sua identidade, ao mesmo tempo em que permite a leitura de desabafos publicados na própria região ou em outras localidades. A plataforma também oferece a opção de interação por meio de comentários, desde que o autor da publicação permita, promovendo apoio, empatia e troca de experiências entre os usuários de maneira segura e anônima.")}
                tags={[
                  "in-development",
                  "FullStack",
                  "React",
                  "CSS",
                  "HTML",
                  "java",
                  "PostgresSQL",
                  "SpringBoot",
                  "JavaScript",
                ]}
                imagens1={[Diagrama, Prototipo]}
                imagens2={[]}
                link={"https://github.com/GustavoLPr"}
              />
            </SwiperSlide>

            <SwiperSlide>
              <CardProjetosV2
                titleCard={t("Portifólio")}
                descricaoCard={t("Este projeto é um portfólio pessoal desenvolvido em React, criado com o objetivo de apresentar projetos, habilidades e informações profissionais de maneira moderna e organizada. A aplicação conta com modo escuro para proporcionar uma melhor experiência visual, além de suporte à troca de idioma, tornando o conteúdo acessível a diferentes públicos. O layout foi construído com foco em responsividade para telas médias e grandes, garantindo boa usabilidade em desktops e notebooks, enquanto a adaptação para dispositivos móveis ainda está em desenvolvimento. O projeto prioriza uma estrutura baseada em componentes reutilizáveis, organização clara de código e atenção à experiência do usuário, servindo tanto como vitrine profissional quanto como base sólida para futuras expansões e melhorias.")}
                tags={["in-development", "React", "HTML", "CSS", "JavaScript"]}
                imagens1={[Print3, Print5]}
                imagens2={[Print4, Print6]}
                link={"https://github.com/GustavoLPr/Portifolio.git"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={styles.contato} id="contato">
        <div className={styles.separacao}>
          <div className={styles.linha}></div>
          <div className={styles.titulo}>{t("Contato")}</div>
          <div className={styles.linha}></div>
        </div>
        <div className={styles.contentContato}>
          <div className={styles.textContato}>
            {t("Tem alguma duvida ou deseja contratar meus serviços?")}
          </div>
          <form ref={form} className={styles.formContato} onSubmit={sendEmail}>
            <div className={styles.formL1}>
              <input
                type="text"
                placeholder={t("Seu nome")}
                className={styles.l1}
                name="nome"
              />
              <input
                type="email"
                placeholder={t("Seu email")}
                className={styles.l1}
                name="email"
              />
            </div>
            <div className={styles.formL2}>
              <input
                type="text"
                placeholder={t("Assunto da mensagem")}
                className={styles.l2}
                name="assunto"
              />
            </div>
            <div className={styles.formL3}>
              <textarea
                type="text"
                placeholder={t("Sua mensagem")}
                className={styles.l3}
                name="mensagem"
              ></textarea>
            </div>
            <div className={styles.botaoContato}>
              <button className={styles.botaoEnviar} onSubmit={sendEmail}>
                {t("Enviar")}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
