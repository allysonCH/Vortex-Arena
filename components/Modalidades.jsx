import './modalidades.css'

function Modalidades({ modalidades }) {
  return (
    <section id="modalidades" className="modalidades">
      <div className="modalidades-topo">
        <div>
          <p className="etiqueta">Modalidades</p>
          <h2>Encontre seu jogo</h2>
        </div>
        <p>Diferentes formas de se movimentar. A mesma energia de estar na areia.</p>
      </div>

      <div className="lista-modalidades">
        {modalidades.map(modalidade => (
          <div key={modalidade.id} className="card-modalidade">
            <img src={modalidade.imagem} alt={modalidade.nome} />
            <h3>{modalidade.nome}</h3>
            <p>{modalidade.descricao}</p>
            <a href="#cadastro">Quero conhecer</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Modalidades