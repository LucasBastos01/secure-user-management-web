import { useAuth } from '../../../hooks/useAuth'
import './AdminDashboard.css'
import { useNavigate } from 'react-router-dom'

export default function AdminDashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()


  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <div className="dashboard-container admin">
      <h1>Bem-vindo, Admin {user?.name} 🛡️</h1>
      <p>Esse é o painel administrativo.</p>

      <button className="button logout" onClick={handleLogout}>
        Sair
      </button>
    </div>
  )
}