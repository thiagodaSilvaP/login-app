import { Input } from "../../compoennts/Input";

import { Container, InputContainer, ButtonContainer, ImageLogIn } from "./style";
import logInLogo from '../../assets/log-in.png';

export const SignIn = () => {
  return (
    <Container>
      <ImageLogIn src={logInLogo} alt="LogIn Logo" />
      <InputContainer>
        <label htmlFor="email">E-mail</label>
        <Input
          tpye="email"
          id="email"
          placeholder="example@domain.com"
          name="email"
        />
      </InputContainer>

      <InputContainer>
        <label htmlFor="password">Password</label>
        <Input
          tpye="password"
          id="password"
          placeholder="******"
          name="password"
        />
      </InputContainer>
      <ButtonContainer>
          <Input type='submit' name='submit' value='Login'/>
      </ButtonContainer>
    </Container>
  );
};
