import styled from "styled-components/native";

export const ModalView = styled.View`
  width: 376px;
  align-items: center;
  justify-content: center;
  background-color: #f1f4ff;
  border-radius: 12px;
  margin: auto;
  border: 1px solid #000;
`;
export const IconVerifiedView = styled.View`
  padding-bottom: 8px;
  padding-top: 16px;
`;
export const Icon = styled.Image``;
export const Title = styled.Text`
  color: #33415c;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  padding-bottom: 16px;
`;
export const ButtonsView = styled.View`
  gap: 16px;
  padding-bottom: 16px;
`;
export const ConfirmButton = styled.Pressable`
  width: 310px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: #023e8a;
  border-radius: 12px;
`;
export const ButtonTextConfirm = styled.Text`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  color: #fff;
`;

export const CancelButton = styled.Pressable`
  width: 310px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
`;
export const ButtonTextCancel = styled.Text`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  color: #f3384e;
  text-decoration: underline;
  text-decoration-color: #f3384e;
`;
export const OpenButton = styled.Pressable`
  background-color: #000;
`;
export const OpenButtonText = styled.Text`
  color: #fff;
`;
