import './cadastro.css'
import FormularioCadastro from './FormularioCadastro'

function Cadastro({ modalidades, aoCadastrar }) {
  return (
    <section id="cadastro" className="cadastro">
      <div className="cadastro-texto">
        <p className="etiqueta">Venha fazer parte</p>
        <h2>Seu próximo encontro é na areia.</h2>
        <p>
          Quer conhecer a Vortex e encontrar a modalidade que combina com você?
          Cadastre seu interesse. Vamos conversar sobre o seu próximo jogo.
        </p>
        <p className="lema">Seu ritmo. Sua turma. Seu lugar.</p>
      </div>

      <FormularioCadastro modalidades={modalidades} aoCadastrar={aoCadastrar} />
    </section>
  )
}

export default Cadastro