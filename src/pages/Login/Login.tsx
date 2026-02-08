import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { useLoading } from '../../context/LoadingContext'
import { toast } from 'react-toastify'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { loading, setLoading } = useLoading()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      // aqui depois entra a API
      await new Promise(resolve => setTimeout(resolve, 2000))

      console.log({ email, password })
      toast.success('Login realizado com sucesso!')
    } catch {
      toast.error('Erro ao fazer login')
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
