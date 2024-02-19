import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

export interface InputStylesInterface {
  marginBottom?: string;
}

export const InputContainer = styled.View<InputStylesInterface>`
  width: 100%;

  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "1.5rem"};
`;

export const FlexBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.Text`
  color: #33415c;
  font-family: "Ubuntu Regular";
  font-size: 1.25rem;

  margin-bottom: 0.5rem;
`;

export const Error = styled.Text`
  color: #dc3838;
  font-size: 0.875rem;

  font-family: "Ubuntu Regular";
`;

export const InputField = styled.TextInput.attrs({
  placeholderTextColor: "#979dac",
})`
  border: 1px solid #33415c;
  border-color: #33415c;
  border-radius: 0.75rem;
  padding: 0.9375rem 1rem;

  font-size: 1.25rem;
  font-family: "Ubuntu Regular";
  color: #33415c;

  background: #f1f4ff;
  outline-style: none;
`;

export const InputFieldMasked = styled(TextInputMask).attrs({
  placeholderTextColor: "#979dac",
})`
  border: 1px solid #33415c;
  border-color: #33415c;
  border-radius: 0.75rem;
  padding: 0.9375rem 1rem;

  font-size: 1.25rem;
  font-family: "Ubuntu Regular";
  color: #33415c;

  background: #f1f4ff;
  outline-style: none;
`;
