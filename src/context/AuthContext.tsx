import { createContext } from 'react'

export type AuthUser = {
  id: string
  name: string
  email: string
  type: 'admin' | 'user'
}

export type AuthContextType = {
  user: AuthUser | null
  loadingAuth: boolean
  login: (email: string, password: string) => Promise<AuthUser>
  logout: () => void
}

export const AuthContext = createContext({} as AuthContextType)
