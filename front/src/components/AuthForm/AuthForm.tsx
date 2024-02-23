import React from "react";
import { View } from "react-native";
import { Header, Title, Image, Container, Detail } from "./styles";

interface AuthFormInterface extends React.PropsWithChildren {}

const AuthForm = ({ children }: AuthFormInterface) => {
  return (
    <>
      <Detail source={require("../../assets/Detail.png")} />
      <Container>
        <Header>
          <Image source={require("../../assets/Logo.svg")} />
          <Title>Papiro</Title>
        </Header>
        <View>{children}</View>
      </Container>
    </>
  );
};

export default AuthForm;
