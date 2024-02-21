import styled from "styled-components/native";

export const UpperDetail = styled.Image`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100vw;
  height: 100vh;
  padding: 0 1rem;
`;

export const Content = styled.View``;

export const Text = styled.Text`
  font-size: 1.75rem;
  color: #023e8a;

  text-align: center;

  font-family: "Ubuntu Medium";
`;

export const ButtonContainer = styled.View`
  margin-top: 3rem;
`;

export const BottomDetail = styled.Image`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
`;
