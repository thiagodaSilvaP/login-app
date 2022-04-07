import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [error, setError] = useState({});
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // const [errors, isSubmit] = useValidate(getValues());
    // setError(errors);

    if (isSubmit) {
      console.log("logado");
      console.log(data);
      navigate("/login");
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
        {/* {error.email && <small>{error.email}</small>} */}
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
        {/* {error.password && <small>{error.password}</small>} */}
        {errors.password?.message && <small>{errors.password?.message}</small>}
      </InputContainer>

      <ButtonContainer>
        <Input type="submit" name="submit" value="Login" />
      </ButtonContainer>
      <Link to={"/signup"} style={{ fontSize: "small", marginTop: "10px" }}>
        Não tem Login?
      </Link>
    </Container>
  );
};
