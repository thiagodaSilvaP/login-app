import { useContext } from 'react';
import {UsersContext} from '../../contexts/UsersContext/index';


export const Login = () => {
    const {authenticated, onLogout} = useContext(UsersContext)

    if (!authenticated) return <h1>Não esta logado</h1>

    console.log(authenticated)

    return (
        <div>
            <h1>logado</h1>
            <button onClick={onLogout}>Sair</button>
        </div>
    )
};
