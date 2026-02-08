import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useLoading } from '../../context/LoadingContext'
import { toast } from 'react-toastify'
import { useAuth } from '../../hooks/useAuth'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { loading, setLoading } = useLoading()
  const { login } = useAuth()

  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      const user = await login(email, password)

      const route =
        user.type === 'admin'
          ? '/admin/dashboard'
          : '/dashboard'

      navigate(route)
      toast.success('Login realizado com sucesso!')
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error('Erro inesperado')
      }
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Login</h1>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>E-mail</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="button" disabled={loading}>
            Entrar
          </button>

          <Link to="/register" className="button secondary">
            Criar conta
          </Link>
        </form>
      </div>
    </div>
  )
}
