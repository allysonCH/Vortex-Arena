import { useState } from 'react'
import Mensagem from './Mensagem'
import './FormularioCadastro.css'

function FormularioCadastro({ modalidades, aoCadastrar }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [modalidade, setModalidade] = useState('')
  const [aceite, setAceite] = useState(false)

  const [mensagem, setMensagem] = useState('')
  const [sucesso, setSucesso] = useState(false)

  function mostrarErro(texto) {
    setSucesso(false)
    setMensagem(texto)
  }

  function enviarFormulario(evento) {
    evento.preventDefault()

    if (nome.trim() === '') {
      mostrarErro('Informe seu nome completo.')
      return
    }

    if (!email.includes('@')) {
      mostrarErro('Informe um e-mail válido.')
      return
    }

    if (telefone.trim().length < 10) {
      mostrarErro('Informe um WhatsApp com DDD.')
      return
    }

    if (modalidade === '') {
      mostrarErro('Escolha uma modalidade.')
      return
    }

    if (!aceite) {
      mostrarErro('Aceite receber as informações para continuar.')
      return
    }

    aoCadastrar({
      id: Date.now(),
      nome: nome,
      email: email,
      telefone: telefone,
      modalidade: modalidade,
    })

    setSucesso(true)
    setMensagem('Cadastro realizado com sucesso! Em breve entraremos em contato.')

    setNome('')
    setEmail('')
    setTelefone('')
    setModalidade('')
    setAceite(false)
  }

  return (
    <div className="cartao-formulario">
      <h3>Vamos nos conhecer?</h3>
      <p>Deixe seu contato e conte qual é o seu jogo.</p>

      <form onSubmit={enviarFormulario} noValidate>
        <div className="campo">
          <label htmlFor="nome">Nome completo</label>
          <input
            id="nome"
            type="text"
            placeholder="Como você se chama?"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
          />
        </div>

        <div className="campos-linha">
          <div className="campo">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="voce@exemplo.com"
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
            />
          </div>

          <div className="campo">
            <label htmlFor="telefone">WhatsApp</label>
            <input
              id="telefone"
              type="tel"
              placeholder="(DDD) 00000-0000"
              value={telefone}
              onChange={(evento) => setTelefone(evento.target.value)}
            />
          </div>
        </div>

        <div className="campo">
          <label htmlFor="modalidade">Modalidade de interesse</label>
          <select
            id="modalidade"
            value={modalidade}
            onChange={(evento) => setModalidade(evento.target.value)}
          >
            <option value="">Selecione uma modalidade</option>
            {modalidades.map(item => (
              <option key={item.id} value={item.nome}>
                {item.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="campo-aceite">
          <input
            id="aceite"
            type="checkbox"
            checked={aceite}
            onChange={(evento) => setAceite(evento.target.checked)}
          />
          <label htmlFor="aceite">
            Aceito receber informações da Vortex Arena pelos contatos informados.
          </label>
        </div>

        <button className="botao" type="submit">Quero fazer parte</button>
      </form>

      <Mensagem texto={mensagem} sucesso={sucesso} />

      <p className="aviso">Seus dados serão usados apenas para esse contato.</p>
    </div>
  )
}

export default FormularioCadastro