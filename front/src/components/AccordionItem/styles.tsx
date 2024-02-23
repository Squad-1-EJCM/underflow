import styled from "styled-components/native";

export const Container = styled.View`
  padding: 16px;
`;

export const ItemContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  background-color: #f1f4ff;
  align-items: center;
`;

export const Item = styled.TouchableOpacity`
  height: 56px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

export const Content = styled.View`
  padding: 10px;
  background-color: #bdd2ee;
  width: 100%;
  height: 56px;
  align-items: flex-start;
  justify-content: center;
`;
