import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import type { JSX } from 'react'

export function PublicRoute({ children }: { children: JSX.Element }) {
  const { user, loadingAuth } = useAuth()

  if (loadingAuth) {
    return null
  }

  if (user) {
    return (
      <Navigate
        to={user.type === 'admin' ? '/admin/dashboard' : '/dashboard'}
        replace
      />
    )
  }

  return children
}
