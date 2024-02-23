import styled from "styled-components/native";

export const VerticalCard = styled.View`
  display: flex;
  flex-direction: row;
  width: 398px;
  height: 189px;
  border-radius: 12px;
  margin: 16px 16px;
  overflow: hidden;
  background-color: #f1f4ff;
`;
export const LeftView = styled.View`
  width: 141px;
  height: 189px;
  overflow: hidden;
  display: flex;
`;
export const BookImage = styled.Image``;
export const RightView = styled.View`
  width: 257px;
`;
export const TopView = styled.View`
  width: 100%;
  padding: 20px 24px;
`;
export const Title = styled.Text`
  color: #33415c;
  font-weight: bold;
`;
export const BottomView = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-top: auto;
  padding: 13px 24px;
`;
export const BottomLeftView = styled.View``;
export const Value = styled.Text`
  color: #979dac;
  font-size: 12px;
`;
export const Price = styled.Text`
  color: #33415c;
  font-weight: bold;
`;
export const TrashCan = styled.Image``;
