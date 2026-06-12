import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Cadastro from './pages/Cadastro'
import Listagem from './pages/Listagem'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="app-header">
          <div>
            <h1>Atividade React</h1>
            <p>Aplicação simples com navegação entre as páginas Início, Cadastro e Listagem.</p>
          </div>
          <Navbar />
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/listagem" element={<Listagem />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
