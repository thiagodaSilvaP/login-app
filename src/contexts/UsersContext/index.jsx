import {createContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {api} from '../../services/api';

export const UsersContext = createContext()

export const UsersProvider = ({children}) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState({});
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
        try {
            const {data} = await api.post('/users/login', {
              email: email,
              password: password
            })
    
            localStorage.setItem('token', JSON.stringify(data.token))
            api.defaults.headers.Authorization = `Bearer ${data.token}`
    
            setAuthenticated(true)
            navigate('/login')
        } catch ({response: {data: {message}}}) {
            return message
        }
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