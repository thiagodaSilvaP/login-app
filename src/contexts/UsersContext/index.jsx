import {createContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {api} from '../../services/api';

export const UsersContext = createContext()

export const UsersProvider = ({children}) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        console.log(token)

        if (token) {
            console.log('alo')
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }
        setLoading(false)
    }, [])


    const onLogin = async ({email, password}) => {
        const {data: {token}} = await api.post('/users/login', {
          email: email,
          password: password
        })
    
        console.log(token)

        localStorage.setItem('token', JSON.stringify(token))
        api.defaults.headers.Authorization = `Bearer ${token}`

        setAuthenticated(true)
        navigate('/login')
      }

    const onLogout = () => {
        setAuthenticated(false)
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
        navigate('/')
    }

      if (loading) return <h1>Loading</h1>

    return (
        <UsersContext.Provider value={{authenticated, onLogin, onLogout}}>
            {children}
        </UsersContext.Provider>
    )
}