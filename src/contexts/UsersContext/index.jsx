import {createContext, useState} from 'react';

export const UsersContext = createContext()

export const UsersProvider = ({children}) => {
    const [users, setUsers] = useState([
        {email: 'thiago@gmail.com', password: '123456'},
        {email: 'rafael@gmail.com', password: 'rafarafa'}
    ]);
    return (
        <UsersContext.Provider value={{users, setUsers}}>
            {children}
        </UsersContext.Provider>
    )
}