import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Input } from "../../compoennts/Input";

import {
  Container,
  InputContainer,
  ButtonContainer,
  ImageLogIn,
} from "./style";
import logInLogo from "../../assets/log-in.png";
import { useValidate } from "../../hooks/useValidate";

export const SignIn = () => {
  const { register, handleSubmit, getValues } = useForm();
  const [error, setError] = useState({});


  const onSubmit = (data) => {
    const [errors, isSubmit] = useValidate(getValues());
    setError(errors);

    if (isSubmit) {
      console.log("logado");
      console.log(data);
    }
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <ImageLogIn src={logInLogo} alt="LogIn Logo" />
      <InputContainer>
        <label htmlFor="email">E-mail</label>
        <Input
          type="email"
          id="email"
          placeholder="example@domain.com"
          {...register("email")}
        />
        {error.email && <small>{error.email}</small>}
      </InputContainer>
      <InputContainer>
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          id="password"
          placeholder="******"
          {...register("password")}
        />
        {error.password && <small>{error.password}</small>}
      </InputContainer>

      <ButtonContainer>
        <Input type="submit" name="submit" value="Login" />
      </ButtonContainer>
    </Container>
  );
};
