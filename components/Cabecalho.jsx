import Logo from './Logo'
import './Cabecalho.css'

function Cabecalho() {
  return (
    <header className="cabecalho">
      <Logo />
      <nav>
        <a href="#sobre">Sobre</a>
        <a href="#modalidades">Modalidades</a>
        <a className="botao-contorno" href="#cadastro">Cadastro</a>
      </nav>
    </header>
  )
}

export default Cabecalho