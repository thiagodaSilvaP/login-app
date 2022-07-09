import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { UsersContext } from '../../contexts/UsersContext';

import { Input } from "../../compoennts/Input";

import {
  Container,
  InputContainer,
  ButtonContainer,
  ImageLogIn,
} from "./style";


import logInLogo from "../../assets/log-in.png";
import { ErrorPopup } from "../ErrorPopup";

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [popupModalIsOpen, setPopupModalIsOpen] = useState(false);
  const [apiError, setApiError] = useState({});
  const { onLogin } = useContext(UsersContext)

  const onSubmit = async (dataSubmit) => {
    const { email, password } = dataSubmit

    const data = await onLogin({ email, password })

    if (data) {
      setApiError(data)
      return setPopupModalIsOpen(true)
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
          {...register("email", { required: "Email is Required" })}
        />
        {errors.email?.message && <small>{errors.email?.message}</small>}
      </InputContainer>
      <InputContainer>
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          id="password"
          placeholder="******"
          {...register("password", {
            required: "Password is Required",
            minLength: {
              value: 4,
              message: "Password must be at least 4 characters",
            },
          })}
        />
        {errors.password?.message && <small>{errors.password?.message}</small>}
      </InputContainer>

      <ButtonContainer>
        <Input type="submit" name="submit" value="Login" />
      </ButtonContainer>
      <Link to={"/signup"} style={{ fontSize: "small", marginTop: "10px" }}>
        Não tem Login?
      </Link>

      <ErrorPopup popupModalIsOpen={popupModalIsOpen} setPopupModalIsOpen={setPopupModalIsOpen}>{apiError}</ErrorPopup>
    </Container>
  );
};
