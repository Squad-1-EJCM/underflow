import React from "react";
import { Text, View } from "react-native";
import { Container, Key, Value } from "./styles";

const InformationKeyValueItem = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  console.log(title);
  return (
    <Container>
      <Key>{title}:</Key>
      <Value>{value}</Value>
    </Container>
  );
};

export default InformationKeyValueItem;
