function UsuarioExternoCard({ usuario }) {
  const endereco = usuario.address?.city ? `${usuario.address.city}` : 'Cidade não informada'
  const contato = usuario.company?.name || usuario.phone || 'Contato não informado'

  return (
    <article className="usuario-externo-card">
      <div>
        <strong>{usuario.name}</strong>
        <span>{usuario.email}</span>
        <span>Cidade: {endereco}</span>
        <span>{usuario.company?.name ? `Empresa: ${usuario.company.name}` : `Telefone: ${usuario.phone}`}</span>
      </div>
    </article>
  )
}

export default UsuarioExternoCard
