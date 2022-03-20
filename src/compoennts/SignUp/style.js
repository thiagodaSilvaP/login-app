import styled from "styled-components";

export const Container = styled.form`
  width: 50%;
  height: 60%;
  padding: 2rem;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  position: relative;

  input {
    display: block;
    height: 3rem;
    width: 100%;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 10px;
    transition: all 0.2s ease;

    &:focus {
      height: 4rem;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
  }
  label {
    position: absolute;
    margin-left: 20px;
    padding: 5px;
    top: -0.8rem;
    background-color: #fff;
    font-size: small;
  }

  small {
    font-size: small;
    color: red;
    padding: 0px 5px;
    font-weight: bold;
  }
`;
export const ButtonContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  input {
    height: 3rem;
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
    background-color: #444;
    color: #fff;
    font-weight: bold;

    &:hover {
      background-color: #222;
    }
  }
`;
