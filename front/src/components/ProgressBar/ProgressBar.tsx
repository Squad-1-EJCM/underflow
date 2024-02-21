import React from "react";
import { View } from "react-native";
import { Container, Progress } from "./styles";

const ProgressBar = ({ progress = 50 }: { progress?: number }) => {
  return (
    <Container>
      <Progress progress={progress}></Progress>
    </Container>
  );
};

export default ProgressBar;
