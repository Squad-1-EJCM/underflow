import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  margin-top: 24px;
  height: 42px;
  overflow-x: hidden;
`;

interface ItemViewInterface {
  marginLeft?: string;
}

export const ItemView = styled.View<ItemViewInterface>`
  background-color: #d6dfff;
  height: 100%;
  padding: 20px;
  margin-right: 24px;
  margin-left: ${({ marginLeft }) => marginLeft};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 20px;
`;
