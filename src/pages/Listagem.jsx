import { useEffect, useState } from 'react'
import { useAlunos } from '../context/AlunosContext.jsx'
import { buscarUsuariosExternos } from '../services/api.js'
import AlunoCard from '../components/AlunoCard'
import UsuarioExternoCard from '../components/UsuarioExternoCard'

function Listagem() {
  const { alunos, removerAluno } = useAlunos()
  const [usuariosExternos, setUsuariosExternos] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  useEffect(() => {
    let ativo = true

    async function carregarUsuarios() {
      setCarregando(true)
      setErro('')

      try {
        const dados = await buscarUsuariosExternos()
        if (ativo) {
          setUsuariosExternos(dados)
        }
      } catch (fetchErro) {
        if (ativo) {
          setErro('Não foi possível carregar os usuários externos.')
        }
      } finally {
        if (ativo) {
          setCarregando(false)
        }
      }
    }

    carregarUsuarios()

    return () => {
      ativo = false
    }
  }, [])

  return (
    <section className="page-content">
      <h2>Listagem</h2>

      <div className="listagem-secao">
        <h3>Alunos cadastrados</h3>
        {alunos.length === 0 ? (
          <p>Não há alunos cadastrados. Faça um cadastro para ver a lista aqui.</p>
        ) : (
          <div className="lista-alunos">
            {alunos.map((aluno) => (
              <AlunoCard key={aluno.id} aluno={aluno} onRemover={removerAluno} />
            ))}
          </div>
        )}
      </div>

      <div className="listagem-secao">
        <h3>Usuários externos</h3>
        {carregando && <p>Carregando usuários externos...</p>}
        {erro && <p className="error-message">{erro}</p>}
        {!carregando && !erro && usuariosExternos.length === 0 && (
          <p>Não foi possível encontrar usuários externos no momento.</p>
        )}
        {!carregando && !erro && usuariosExternos.length > 0 && (
          <div className="lista-external">
            {usuariosExternos.map((usuario) => (
              <UsuarioExternoCard key={usuario.id} usuario={usuario} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Listagem
