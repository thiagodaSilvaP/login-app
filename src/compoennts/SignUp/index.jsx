import React, {useContext, useState} from 'react';
import axios from 'axios';

import { useForm } from "react-hook-form";
import {Link, useNavigate} from 'react-router-dom';

import {UsersContext} from '../../contexts/UsersContext';
import { Input } from "../Input/";

import { InputContainer, Container, ButtonContainer } from "./style";
import { api } from '../../services/api';

export const SignUp = () => {
  const { register, handleSubmit,  formState: {errors}, getValues } = useForm();
  const navigate = useNavigate()

  const onSubmit = async dataSubmit => {
    const {name, email, password} = dataSubmit

      const data = await onRegister({name, email, password})

      navigate('/login')
  }

  const onRegister = async ({name, email, password}) => {
    const {data} = await api.post('/users/create', {
      name: name,
      email: email,
      password: password
    })

    return data
    
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <InputContainer>
        <label htmlFor="name">Nome</label>
        <Input
          type="name"
          id="name"
          {...register("name", {required: 'Name is Required'})}
        />
        {errors.name?.message && <small>{errors.name?.message}</small>}
      </InputContainer>
      <InputContainer>
        <label htmlFor="email">E-mail</label>
        <Input
          type="email"
          id="email"
          placeholder="example@domain.com"
          {...register("email", {required: 'Email is Required'})}
        />
        {errors.email?.message && <small>{errors.email?.message}</small>}
      </InputContainer>
      <InputContainer>
        <label htmlFor="password">Senha</label>
        <Input
          type="password"
          id="password"
          placeholder="******"
          {...register("password", {required: 'Password is Required', minLength: {value: 4, message: 'Password must be at least 4 characters'}})}
        />
        {errors.password?.message && <small>{errors.password?.message}</small>}
      </InputContainer>
      <ButtonContainer>
        <Input type="submit" name="submit_register" value="Cadastrar" />
      </ButtonContainer>
      <Link to={'/'} style={{fontSize: 'small'}}>Já tem Login?</Link>
    </Container>
  );
};
