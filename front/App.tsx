import React from "react";
import Login from "./src/pages/Login/Login";
import styled from "styled-components/native";
import Register from "./src/pages/Register/Register";
import RegisterContextProvider from "./src/contexts/RegisterContext";
import SuccessPage from "./src/components/SuccessPage/SuccessPage";

export default function App() {
  return (
    <Container>
      <RegisterContextProvider>
        <Register />
      </RegisterContextProvider>
    </Container>
  );
}

const Container = styled.View`
  width: 100vw;
  min-height: 100vh;
  overflow-y: scroll;
`;
