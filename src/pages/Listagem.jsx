import { useAlunos } from '../context/AlunosContext.jsx'
import AlunoCard from '../components/AlunoCard'

function Listagem() {
  const { alunos, removerAluno } = useAlunos()

  return (
    <section className="page-content">
      <h2>Listagem</h2>
      {alunos.length === 0 ? (
        <p>Não há alunos cadastrados. Faça um cadastro para ver a lista aqui.</p>
      ) : (
        <div className="lista-alunos">
          {alunos.map((aluno) => (
            <AlunoCard key={aluno.id} aluno={aluno} onRemover={removerAluno} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Listagem
