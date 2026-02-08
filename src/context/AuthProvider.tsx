import { useState } from 'react'
import { AuthContext, type AuthUser } from './AuthContext'
import { login as loginService } from '../services/auth.service'
import { cryptoJsDecrypt, cryptoJsEncrypt } from '../utils/crypto'

const getInitialUser = (): AuthUser | null => {
  const encryptedUser = localStorage.getItem('user')
  const encryptedToken = localStorage.getItem('token')

  if (!encryptedUser || !encryptedToken) return null

  return cryptoJsDecrypt<AuthUser>(encryptedUser)
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(getInitialUser)
  const [loadingAuth] = useState(false)

  async function login(email: string, password: string) {
    const response = await loginService({ email, password })

    const user = response.data.user
    const token = response.data.token

    setUser(user)
    localStorage.setItem('user', cryptoJsEncrypt(user))
    localStorage.setItem('token', cryptoJsEncrypt(token))

    return user
  }

  function logout() {
    setUser(null)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ user, loadingAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
