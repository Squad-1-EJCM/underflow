import React from "react";
import { AnchorText, Container, GhostText, Underline } from "./styles";
interface TwoLineAnchorInterface {
  firstLine: string;
  secondLine: string;
  href: string;
}

const TwoLineAnchor = ({
  firstLine,
  secondLine,
  href,
}: TwoLineAnchorInterface) => {
  return (
    <Container>
      <GhostText>{firstLine}</GhostText>
      {/* //! Solve href error */}
      <AnchorText onPress={() => {}}>
        {secondLine}
        <Underline />
      </AnchorText>
    </Container>
  );
};

export default TwoLineAnchor;
