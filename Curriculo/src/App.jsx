import './App.css'

function App() {
  return (
    <div className="container">
      <main className="content">

        <section className="hero">
          <div className="profile-image">
            <img
              src="./img/Fotopedroself.jpeg"
              alt="Pedro Coelho"
            />
          </div>

          <h1>Pedro Oliveira Coelho</h1>

          <h2>
            Estudante de Sistemas de Informação | Desenvolvedor em Formação
          </h2>

          <p className="quote">
            "Transformando problemas reais em soluções através da tecnologia."
          </p>
        </section>

        <section className="card">
          <h3>Sobre Mim</h3>

          <p>
            Sou estudante de Sistemas de Informação na PUC Minas e atualmente
            atuo com suporte e análise de sistemas ERP.
          </p>

          <p>
            Tenho interesse especial em desenvolvimento de software,
            engenharia de requisitos, automação de processos e construção
            de soluções que gerem valor para pessoas e empresas.
          </p>

          <p>
            Busco constantemente aprender novas tecnologias e aplicá-las na
            prática, transformando conhecimento em resultados reais.
          </p>
        </section>

        <section className="card">
          <h3>Principais Competências</h3>

          <div className="skills">
            <span>C# e .NET</span>
            <span>React</span>
            <span>Node.js</span>
            <span>MySQL</span>
            <span>Git & GitHub</span>
            <span>Sistemas ERP</span>
            <span>Engenharia de Requisitos</span>
            <span>Cloud e DevOps</span>
          </div>
        </section>

        <section className="card">
          <h3>Experiência Atual</h3>

          <h4>Avanço Tecnologia</h4>

          <p>
            Atuo com suporte e análise de sistemas ERP, levantamento de
            requisitos, identificação de problemas operacionais e melhoria
            contínua dos processos de negócio.
          </p>
        </section>

        <section className="card">
          <h3>Além da Tecnologia</h3>

          <div className="interests">
            <div>📚 Leitor de literatura clássica</div>
            <div>🏐 Praticante de vôlei</div>
            <div>🤝 Trabalho em equipe</div>
            <div>🚀 Aprendizado contínuo</div>
          </div>
        </section>

        <section className="card contact">
          <h3>Contato</h3>

          <p>📧 pedrooliveira.ocb@gmail.com</p>

          <a
            href="https://linkedin.com/in/pedro-oliveira-coelho"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/1PedroCoelho"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </section>

      </main>
    </div>
  )
}

export default App