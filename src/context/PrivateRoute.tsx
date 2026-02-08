import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import type { JSX } from 'react'

type Props = {
  children: JSX.Element
  allowedRoles?: Array<'admin' | 'user'>
}

export function PrivateRoute({ children, allowedRoles }: Props) {
  const { user } = useAuth()

  // não logado
  if (!user) {
    return <Navigate to="/login" replace />
  }

  // sem permissão
  if (allowedRoles && !allowedRoles.includes(user.type)) {
    return <Navigate to="/forbidden" replace />
  }

  // autorizado
  return children
}
