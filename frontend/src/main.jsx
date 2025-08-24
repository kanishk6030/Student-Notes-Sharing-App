import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthenContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { NotesProvider } from './contexts/NotesContext.jsx'
import { UsersProvider } from './contexts/UsersContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <UsersProvider>
      <AuthProvider>
      <NotesProvider>
      <App />
      </NotesProvider>
    </AuthProvider>
    </UsersProvider>
    </BrowserRouter>
  </StrictMode>,
)
