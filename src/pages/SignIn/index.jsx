import React, {useState} from 'react';

import { Input } from "../../compoennts/Input";

import { Container, InputContainer, ButtonContainer, ImageLogIn } from "./style";
import logInLogo from '../../assets/log-in.png';
import { useValidate } from '../../hooks/useValidate';

export const SignIn = () => {
  const [values, setvalues] = useState({email: '', password: ''});
  const [errors, setErrors] = useState({});

  const handleOnChange = (event) => {
    const {name, value} = event.target
    setvalues(prev => {return {...values, [name]: value}})
  }
  const handleOnSubmit = (event) => {
    event.preventDefault()
    const [errors, isSubmit] = useValidate(values)
    setErrors(errors)

    if (isSubmit) {
      console.log('logado');
      
    }
  }

  return (
    <Container onSubmit={handleOnSubmit}>
      <ImageLogIn src={logInLogo} alt="LogIn Logo" />
      <InputContainer>
        <label htmlFor="email">E-mail</label>
        <Input
          type="email"
          id="email"
          placeholder="example@domain.com"
          name="email"
          value={values.email}
          onChange={handleOnChange}
          />
          {errors.email && <small>{errors.email}</small>}
      </InputContainer>

      <InputContainer>
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          id="password"
          placeholder="******"
          name="password"
          value={values.password}
          onChange={handleOnChange}
        />
        {errors.password && <small>{errors.password}</small>}
      </InputContainer>
      <ButtonContainer>
          <Input type='submit' name='submit' value='Login'/>
      </ButtonContainer>
    </Container>
  );
};
