import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import { Container, Text } from "./styles";

const NotFound = ({
  imgUrl,
  text,
}: {
  imgUrl: ImageSourcePropType | undefined;
  text: string;
}) => {
  return (
    <Container>
      <Image source={imgUrl} />
      <Text>{text}</Text>
    </Container>
  );
};

export default NotFound;
