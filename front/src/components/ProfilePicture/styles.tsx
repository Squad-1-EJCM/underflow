import styled from "styled-components/native";

export const ProfilePictureContainer = styled.View<{ height?: string }>`
  height: ${({ height }) => (height ? height : "2.5rem")};
  width: ${({ height }) => (height ? height : "2.5rem")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Image = styled.Image`
  max-height: 100%;
  height: 100%;
  max-width: 100%;
  width: 100%;
  border-radius: 50%;
`;
