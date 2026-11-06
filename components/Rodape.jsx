import Logo from './Logo'
import './rodape.css'

function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape-topo">
        <Logo />
        <p className="rodape-frase">
          A vida acontece
          <br />
          do lado de fora.
        </p>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#modalidades">Modalidades</a>
          <a href="#cadastro">Cadastro</a>
          <a className="rodape-voltar-topo" href="#inicio" aria-label="Voltar ao início">
            ↑
          </a>
        </nav>
      </div>

      <div className="rodape-base">
        <p>© 2026 Vortex Arena. Todos os direitos reservados.</p>
        <p>Feita de encontros. Movida pelo esporte.</p>
      </div>
    </footer>
  )
}

export default Rodape