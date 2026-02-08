import { useAuth } from '../../../hooks/useAuth'
import './UserDashboard.css'
import { useNavigate } from 'react-router-dom'

export default function UserDashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <div className="dashboard-container">
      <h1>Bem-vindo, {user?.name} 👋</h1>
      <p>Esse é o seu painel de usuário.</p>

      <button className="button logout" onClick={handleLogout}>
        Sair
      </button>
    </div>
  )
}
