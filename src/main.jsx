import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AlunosProvider } from './context/AlunosContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AlunosProvider>
      <App />
    </AlunosProvider>
  </StrictMode>,
)
