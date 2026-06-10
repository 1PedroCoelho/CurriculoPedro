import "./App.css";
import fotoPedro from "./img/Fotopedroself.jpeg";

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

function App() {
  return (
    <div className="container">
      <main className="content">

        {/* HERO */}
        <section className="hero">
          <img
            src={fotoPedro}
            alt="Pedro Oliveira Coelho"
            className="profile-image"
          />

          <h1>Pedro Oliveira Coelho</h1>

          <h2>
            Estudante de Sistemas de Informação
          </h2>

          <p className="subtitle">
            Tecnologia • Desenvolvimento • Sistemas ERP
          </p>

          <p className="location">
            📍 Belo Horizonte, MG
          </p>
        </section>

        {/* CONTATO */}
        <section className="card">
          <h3>Entre em Contato</h3>

          <div className="contact-grid">

            <a
              href="mailto:pedrooliveira.ocb@gmail.com"
              className="contact-card"
            >
              <FaEnvelope />
              <span>Email</span>
            </a>

            <a
              href="https://linkedin.com/in/pedro-oliveira-coelho"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/1PedroCoelho"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://wa.me/5531998232511"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>

          </div>
        </section>

        {/* SOBRE */}
        <section className="card">
          <h3>Sobre Mim</h3>

          <p>
            Sou estudante de Sistemas de Informação na PUC Minas e atualmente
            atuo com suporte e análise de sistemas ERP.
          </p>

          <p>
            Tenho grande interesse por desenvolvimento de software,
            engenharia de requisitos, automação de processos e construção
            de soluções que gerem valor para pessoas e empresas.
          </p>

          <p>
            Acredito no aprendizado contínuo e procuro transformar
            conhecimento em resultados práticos.
          </p>
        </section>

        {/* TECNOLOGIAS */}
        <section className="card">
          <h3>Tecnologias</h3>

          <div className="skills">
            <span>C#</span>
            <span>.NET</span>
            <span>React</span>
            <span>Node.js</span>
            <span>MySQL</span>
            <span>Git</span>
            <span>Sistemas ERP</span>
            <span>Cloud</span>
            <span>DevOps</span>
            <span>Inglês B2</span>
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section className="card">
          <h3>Experiência Atual</h3>

          <h4>Avanço Tecnologia</h4>

          <p>
            Estagiário desde Agosto de 2025.
          </p>

          <ul>
            <li>Suporte e análise de sistemas ERP</li>
            <li>Levantamento de requisitos</li>
            <li>Atendimento a usuários</li>
            <li>Análise de processos</li>
            <li>Melhoria contínua do sistema</li>
          </ul>
        </section>

        <section className="card">
          <h3>Experiência Anterior</h3>

          <h4>Somar Capital</h4>

          <p>
            Auxiliar de Escritório (Jan/2024 - Jul/2025)
          </p>

          <ul>
            <li>Rotinas fiscais e administrativas</li>
            <li>Notas fiscais e apuração de impostos</li>
            <li>Organização documental</li>
            <li>Controle de prazos</li>
          </ul>
        </section>

        {/* FORMAÇÃO */}
        <section className="card">
          <h3>Formação</h3>

          <h4>PUC Minas</h4>

          <p>
            Sistemas de Informação
          </p>

          <p>
            Previsão de conclusão: Julho de 2028
          </p>
        </section>

        {/* INTERESSES */}
        <section className="card">
          <h3>Além da Tecnologia</h3>

          <div className="interests">
            <span>📚 Literatura</span>
            <span>🏐 Vôlei</span>
            <span>🤝 Trabalho em equipe</span>
            <span>🚀 Aprendizado contínuo</span>
          </div>
        </section>

        {/* FRASE */}
        <section className="quote-section">
          <p>
            "Transformando problemas reais em soluções através da tecnologia."
          </p>
        </section>

      </main>
    </div>
  );
}

export default App;