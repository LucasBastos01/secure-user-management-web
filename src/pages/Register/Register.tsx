import { useState } from 'react'
import './Register.css'
import { toast } from 'react-toastify'
import { useLoading } from '../../context/LoadingContext'
import { Link } from 'react-router-dom'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { loading, setLoading } = useLoading()
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (password !== confirmPassword) {
      return toast.error('Senhas não conferem!')
    }

    setLoading(true)

    try {
      // aqui depois entra a API
      await new Promise(resolve => setTimeout(resolve, 2000))

      console.log({ name, email, password })
      toast.success('Conta criada com sucesso!')
    } catch {
      toast.error('Erro ao criar conta')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Criar conta</h1>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

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

          <div className="form-group">
            <label>Confirmar senha</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="button" disabled={loading}>
            Cadastrar
          </button>
          <Link to="/login" className="button secondary">
            Voltar
          </Link>
        </form>
      </div>
    </div>
  )
}
