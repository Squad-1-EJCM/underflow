import styled from "styled-components/native";

export const TotalView = styled.View`
  display: flex;
  flex: 1;
`;
export const TopView = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 70px;
  gap: 20px;
  padding-bottom: 24px;
`;
export const PhotoView = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #000;
`;
export const ProfilePhoto = styled.Image`
  width: 100px;
  height: 100px;
`;
export const Name = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 24px;
`;
export const OptionsView = styled.View`
  display: flex;
  padding: 20px;
  gap: 24px;
`;
export const Container = styled.View`
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;
export const Icon = styled.Image``;
export const Subtitles = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: medium;
`;

