import styled from "styled-components/native";

interface ProgressInterface {
  progress: number;
}

export const Container = styled.View`
  width: 100vw;
  height: 0.8rem;
  background: #f1f4ff;

  position: fixed;
  bottom: 0;
  left: 0;
`;

export const Progress = styled.View<ProgressInterface>`
  width: ${({ progress }) => `${progress * 100}%`};
  height: 100%;
  background: #00b0ed;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;

  transition: all 0.3s;

  z-index: 100;
`;
