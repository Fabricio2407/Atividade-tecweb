function AlunoCard({ aluno, onRemover }) {
  return (
    <article className="aluno-card">
      <div className="aluno-info">
        <strong>{aluno.nome}</strong>
        <span>{aluno.email}</span>
        <span>Curso: {aluno.curso}</span>
        <span>Matrícula: {aluno.matricula}</span>
        <span>Período: {aluno.periodo}</span>
      </div>
      {onRemover && (
        <button type="button" className="button-remover" onClick={() => onRemover(aluno.id)}>
          Remover
        </button>
      )}
    </article>
  )
}

export default AlunoCard
