import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import { IUser } from '../types/user'
import { IAuthContext, IAuthContextProviderProps, ILoginData } from './types'

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthContextProvider = ({children}: IAuthContextProviderProps) => {

  const [user, setUser] = useState<IUser>({} as IUser);

  const navigate = useNavigate()

  const handleLogin = async (loginData: ILoginData) => {
    try {
      const { data } = await api.get(`users?email=${loginData.email}&password=${loginData.password}`)
      if(data.length === 1) {
        setUser(data[0])
        navigate('/feed')
      } else {
        alert('Email ou senha inválido.')
      }
    } catch {
      alert('Houve um erro, tente novamente.')
    }
  }

  const handleSignOut = () => {
    setUser({} as IUser)
  }

  return (
    <AuthContext.Provider value={{user, handleLogin, handleSignOut}}>{children}</AuthContext.Provider>
  )
}