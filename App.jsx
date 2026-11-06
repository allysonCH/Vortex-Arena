import { useState } from 'react'
import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Modalidades from './components/Modalidades'
import Cadastro from './components/Cadastro'
import ListarClientes from './components/ListarClientes'
import Rodape from './components/Rodape'

import imagemHero from './assets/hero.webp';
import imagemSobre from './assets/imagemSobre.jpg';
import imagemBeachTennis from './assets/beachTennis.jpg';
import imagemVolei from './assets/voleiDePraia.jpg';
import imagemFutevolei from './assets/futeVolei.jpeg';

const destaques = ['Bem-estar', 'Convivência', 'Ao ar livre']

const modalidades = [
  {
    id: 1,
    nome: 'Beach Tennis',
    descricao: 'Leveza, agilidade e boas trocas. Entre na quadra e descubra o prazer de jogar junto.',
    imagem: imagemBeachTennis,
  },
  {
    id: 2,
    nome: 'Vôlei de Praia',
    descricao: 'Energia que passa de um lado para o outro. Um jogo de parceria, movimento e superação.',
    imagem: imagemVolei,
  },
  {
    id: 3,
    nome: 'Futevôlei',
    descricao: 'A criatividade do futebol encontra a areia. Controle, ritmo e conexão a cada toque.',
    imagem: imagemFutevolei,
  },
]

function App() {
  const [clientes, setClientes] = useState([])

  function cadastrarCliente(novoCliente) {
    setClientes(prevClientes => [...prevClientes, novoCliente])
  }

  return (
    <>
      <div className="inicio">
        <Cabecalho />
        <Hero imagem={imagemHero} modalidades={modalidades} />
      </div>
      <Sobre imagem={imagemSobre} destaques={destaques} />
      <Modalidades modalidades={modalidades} />
      <Cadastro modalidades={modalidades} aoCadastrar={cadastrarCliente} />
      <ListarClientes clientes={clientes} />
      <Rodape />
    </>
  )
}

export default App