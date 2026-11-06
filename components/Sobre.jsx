import './Sobre.css'

function Sobre({ imagem, destaques }) {
  return (
    <section id="sobre" className="sobre">
      <div className="sobre-texto">
        <p className="etiqueta">Sobre a arena</p>
        <h2>Muito mais que esporte.</h2>
        <p>
          Na Vortex, o jogo é só o começo. Somos um espaço para cuidar de si,
          conhecer pessoas e deixar a natureza fazer parte da rotina.
        </p>
        <p>
          Entre uma troca de bola e uma boa conversa, a areia aproxima. Venha
          pelo esporte. Fique pela energia de estar junto.
        </p>

        <ul className="destaques">
          {destaques.map(destaque => (
            <li key={destaque}>{destaque}</li>
          ))}
        </ul>
      </div>

      <div className="sobre-imagem">
        <img src={imagem} alt="Pessoas caminhando na areia com raquetes" />
        <p>Um lugar para jogar. Um convite para ficar.</p>
      </div>
    </section>
  )
}

export default Sobre