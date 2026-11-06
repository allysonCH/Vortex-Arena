import './Hero.css'
function Hero({ imagem, modalidades }) {
  const nomes = modalidades.map(modalidade => modalidade.nome).join(' / ')

  return (
    <section id="inicio" className="hero">
      <img
        className="hero-imagem"
        src={imagem}
        alt="Bola de vôlei na areia da praia"
      />

      <div className="hero-conteudo">
        <h1>
          A intensidade das quadras.
          <br />
          O acolhimento da praia.
        </h1>
        <p>
          Seu espaço para praticar esportes, encontrar pessoas e viver novas
          experiências.
        </p>
        <a className="botao" href="#sobre">Conheça a arena</a>
      </div>

      <p className="hero-modalidades">{nomes}</p>
    </section>
  )
}

export default Hero