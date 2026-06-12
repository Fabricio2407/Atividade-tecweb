import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegação principal">
      <NavLink to="/" end className="nav-link">
        Início
      </NavLink>
      <NavLink to="/cadastro" className="nav-link">
        Cadastro
      </NavLink>
      <NavLink to="/listagem" className="nav-link">
        Listagem
      </NavLink>
    </nav>
  )
}

export default Navbar
