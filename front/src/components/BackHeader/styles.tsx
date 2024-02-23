import styled from "styled-components/native";

export const HeaderView = styled.View`
  background-color: #f1f4ff;
  display: flex;
  position: relative;

  width: 100vw;
  height: 66px;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 2px 2px 4px;
`;
export const IconBack = styled.Image`
  width: 24px;
  height: 20px;
`;
export const IconBook = styled.Image`
  width: 28px;
  height: 50px;
`;
export const IconBackView = styled.View`
  justify-content: flex-start;
`;
export const IconBookView = styled.View`
  position: absolute;
  transform: translateX(-14px);
  left: 50%;
`;
