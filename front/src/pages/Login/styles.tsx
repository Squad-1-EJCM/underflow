import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const FlexRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Anchor = styled.Text`
  color: #0096c7;

  font-family: "Ubuntu Medium";
`;

export const ButtonsContainer = styled.View`
  display: flex;
  gap: 1rem;

  margin-top: 3rem;
`;

export const LinksContainer = styled.View`
  margin-top: 4.5rem;
`;

export const Detail = styled.Image`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: -1;
`;
