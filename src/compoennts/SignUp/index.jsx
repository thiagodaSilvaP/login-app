import React, {useContext} from 'react';
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';

import {UsersContext} from '../../contexts/UsersContext';
import { Input } from "../Input/";

import { InputContainer, Container, ButtonContainer } from "./style";

export const SignUp = () => {
  const { register, handleSubmit, getValues } = useForm();
  const {users, setUsers} = useContext(UsersContext)

  const onSubmit = data => {
    registerUser()
    console.log(users);
  }
  const registerUser = () => {
      setUsers(prev => [...prev, {email: getValues('email'), password: getValues('password')}])
  }
  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <InputContainer>
        <label htmlFor="email">E-mail</label>
        <Input
          type="email"
          id="email"
          placeholder="example@domain.com"
          {...register("email")}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="password">Senha</label>
        <Input
          type="password"
          id="password"
          placeholder="******"
          {...register("password")}
        />
      </InputContainer>
      {/* <InputContainer>
        <label htmlFor="confirm_password">Confirme sua Senha</label>
        <Input
          type="password"
          id="confirm_password"
          placeholder="******"
          {...register("confirm_password")}
        />
      </InputContainer> */}
      <ButtonContainer>
        <Input type="submit" name="submit_register" value="Cadastrar" />
      </ButtonContainer>
      <Link to={'/'} style={{fontSize: 'small'}}>Já tem Login?</Link>
    </Container>
  );
};
