import React from "react";
import { AnchorText, Container, GhostText, Underline } from "./styles";
interface TwoLineAnchorInterface {
  firstLine: string;
  secondLine: string;
  onClick: VoidFunction;
}

const TwoLineAnchor = ({
  firstLine,
  secondLine,
  onClick,
}: TwoLineAnchorInterface) => {
  return (
    <Container>
      <GhostText>{firstLine}</GhostText>
      <AnchorText onPress={onClick}>
        {secondLine}
        <Underline />
      </AnchorText>
    </Container>
  );
};

export default TwoLineAnchor;
