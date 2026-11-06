import './listarCliente.css'

function ListaClientes({ clientes }) {
  return (
    <section className="clientes">
      <h2 className="clientes-titulo">
        Clientes cadastrados
        <span className="clientes-contagem">{clientes.length}</span>
      </h2>

      {clientes.length === 0 ? (
        <p className="clientes-vazio">Nenhum cliente cadastrado ainda.</p>
      ) : (
        <ul>
          {clientes.map(cliente => (
            <li key={cliente.id}>
              <span className="cliente-inicial" aria-hidden="true">
                {cliente.nome.trim().charAt(0).toUpperCase()}
              </span>
              <span className="cliente-detalhes">
                <span className="cliente-nome">{cliente.nome}</span>
                <span className="cliente-modalidade">{cliente.modalidade}</span>
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListaClientes