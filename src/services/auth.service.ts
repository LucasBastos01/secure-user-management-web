import { AxiosError } from 'axios'
import { api } from './api'
import { AppError } from '../errors/AppError'

type LoginData = {
  email: string
  password: string
}

type RegisterData = {
  name: string
  email: string
  password: string
  confirm_password: string
}

export async function login(data: LoginData) {
  try {
    const response = await api.post('/auth/login', data)
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data?.message || 'Erro ao fazer login'

      throw new AppError(message)
    }

    throw new AppError('Erro inesperado')
  }
}
export async function register(data: RegisterData) {
  try {
    const response = await api.post('/users', data)
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data?.message || 'Erro ao criar conta'

      throw new AppError(message)
    }

    throw new AppError('Erro inesperado')
  }
}
