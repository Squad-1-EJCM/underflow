import React from "react";
import Login from "./src/pages/Login/Login";
import styled from "styled-components/native";

export default function App() {
  return (
    <Container>
      <Login />
    </Container>
  );
}

const Container = styled.View`
  width: 100vw;
  min-height: 100vh;
`;
