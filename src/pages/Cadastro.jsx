import { useState } from 'react'
import { useAlunos } from '../context/AlunosContext.jsx'

const estadoInicial = {
  nome: '',
  email: '',
  curso: '',
  matricula: '',
  periodo: '',
}

function Cadastro() {
  const { adicionarAluno } = useAlunos()
  const [formulario, setFormulario] = useState(estadoInicial)
  const [erros, setErros] = useState({})
  const [mensagem, setMensagem] = useState('')

  const validarEmail = (valor) => {
    return typeof valor === 'string' && valor.includes('@') && valor.includes('.')
  }

  const validarFormulario = () => {
    const novosErros = {}

    if (!formulario.nome.trim()) {
      novosErros.nome = 'Nome é obrigatório.'
    }
    if (!formulario.email.trim()) {
      novosErros.email = 'Email é obrigatório.'
    } else if (!validarEmail(formulario.email.trim())) {
      novosErros.email = 'Digite um email válido.'
    }
    if (!formulario.curso.trim()) {
      novosErros.curso = 'Curso é obrigatório.'
    }
    if (!formulario.matricula.trim()) {
      novosErros.matricula = 'Matrícula é obrigatória.'
    }
    if (!formulario.periodo.trim()) {
      novosErros.periodo = 'Período é obrigatório.'
    }

    setErros(novosErros)
    return Object.keys(novosErros).length === 0
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormulario((current) => ({ ...current, [name]: value }))
    setErros((current) => ({ ...current, [name]: '' }))
    setMensagem('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validarFormulario()) {
      setMensagem('Corrija os erros do formulário antes de enviar.')
      return
    }

    const novoAluno = {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      nome: formulario.nome.trim(),
      email: formulario.email.trim(),
      curso: formulario.curso.trim(),
      matricula: formulario.matricula.trim(),
      periodo: formulario.periodo.trim(),
    }

    adicionarAluno(novoAluno)
    setFormulario(estadoInicial)
    setErros({})
    setMensagem('Aluno cadastrado com sucesso!')
  }

  return (
    <section className="page-content">
      <h2>Cadastro</h2>
      <p>Preencha os campos abaixo para cadastrar um aluno.</p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={formulario.nome}
            onChange={handleChange}
          />
          {erros.nome && <span className="error-message">{erros.nome}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formulario.email}
            onChange={handleChange}
          />
          {erros.email && <span className="error-message">{erros.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="curso">Curso</label>
          <input
            id="curso"
            name="curso"
            type="text"
            value={formulario.curso}
            onChange={handleChange}
          />
          {erros.curso && <span className="error-message">{erros.curso}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="matricula">Matrícula</label>
          <input
            id="matricula"
            name="matricula"
            type="text"
            value={formulario.matricula}
            onChange={handleChange}
          />
          {erros.matricula && <span className="error-message">{erros.matricula}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="periodo">Período</label>
          <input
            id="periodo"
            name="periodo"
            type="text"
            value={formulario.periodo}
            onChange={handleChange}
          />
          {erros.periodo && <span className="error-message">{erros.periodo}</span>}
        </div>

        <button type="submit">Cadastrar aluno</button>
        {mensagem && <p className="form-message">{mensagem}</p>}
      </form>
    </section>
  )
}

export default Cadastro
