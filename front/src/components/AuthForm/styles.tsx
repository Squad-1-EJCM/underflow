import styled from "styled-components/native";

export const Detail = styled.Image`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Container = styled.View`
  width: 100%;
  padding: 0 1rem;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  margin-top: 2.5rem;
  margin-bottom: 4.125rem;
`;

export const Title = styled.Text`
  font-weight: 400;
  color: #33415c;

  margin-bottom: 0.5rem;

  font-family: "Meow Script";
  font-size: 2.5rem;
`;

export const Image = styled.Image`
  width: 50px;
  height: 90px;
`;
