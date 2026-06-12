import { createContext, useContext, useEffect, useState } from 'react'

const AlunosContext = createContext(null)

export function AlunosProvider({ children }) {
  const [alunos, setAlunos] = useState(() => {
    if (typeof window === 'undefined') {
      return []
    }

    try {
      const saved = localStorage.getItem('alunos')
      return saved ? JSON.parse(saved) : []
    } catch (error) {
      console.warn('Não foi possível carregar alunos do localStorage:', error)
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('alunos', JSON.stringify(alunos))
    } catch (error) {
      console.warn('Não foi possível salvar alunos no localStorage:', error)
    }
  }, [alunos])

  const adicionarAluno = (aluno) => {
    setAlunos((current) => [...current, aluno])
  }

  const removerAluno = (id) => {
    setAlunos((current) => current.filter((aluno) => aluno.id !== id))
  }

  return (
    <AlunosContext.Provider value={{ alunos, adicionarAluno, removerAluno }}>
      {children}
    </AlunosContext.Provider>
  )
}

export function useAlunos() {
  const context = useContext(AlunosContext)

  if (!context) {
    throw new Error('useAlunos deve ser usado dentro de AlunosProvider')
  }

  return context
}
