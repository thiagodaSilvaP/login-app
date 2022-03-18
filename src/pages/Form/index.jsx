import {SignIn} from '../../compoennts/SignIn/';
import {SignUp} from '../../compoennts/SignUp/';

import { Container } from "./style"

export const Form = () => {
    return (
        <Container>
            {/* <SignIn/> */}
            <SignUp/>
            <a href='#'>N tem login, se cadastre</a>
        </Container>
    )
}