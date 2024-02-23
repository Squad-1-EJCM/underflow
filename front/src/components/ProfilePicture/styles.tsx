import styled from "styled-components/native";

export const ProfilePictureContainer = styled.View<{ height?: string }>`
  height: ${({ height }) => (height ? height : "2.5rem")};
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Image = styled.Image`
  height: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;
