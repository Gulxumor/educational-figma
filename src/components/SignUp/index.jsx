import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Input, Text, Title, Wrapper } from "./style.js";

const SignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const onSave = () => {
    setTimeout(() => {
      localStorage.setItem(
        "token",
        JSON.stringify({
          username: nameRef.current.value,
          password: passwordRef.current.value,
          email: emailRef.current.value,
        })
      );
      window.location.reload();
      navigate("/shop");
    }, 2000);
  };

  return (
    <Container>
      <Wrapper>
        <Text>Login</Text>

        <div>
          <Title>Email:</Title>
          <Input placeholder="Enter your email" ref={emailRef} type="email" />
        </div>
        <div>
          <Title>Password:</Title>
          <Input
            placeholder="Enter your password"
            ref={passwordRef}
            type="password"
          />
        </div>
        <div>
          <Button type="submit" onClick={onSave} id="button">
            Login
          </Button>

          <p>Do you have an account? Register</p>

        </div>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
