import React from "react";
import styled from "styled-components/native";
import Routes from "./src/routes";
import "react-native-gesture-handler";

export default function App() {
  return (
    <Container>
      <Routes />
    </Container>
  );
}

const Container = styled.View`
  width: 100vw;
  min-height: 100vh;
  overflow-y: scroll;
`;
