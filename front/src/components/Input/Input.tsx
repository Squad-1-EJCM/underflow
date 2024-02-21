import React from "react";
import {
  Error,
  FlexBox,
  InputContainer,
  InputField,
  InputFieldMasked,
  Label,
} from "./styles";
import { FieldError } from "react-hook-form";
import {
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from "react-native-masked-text";

interface maskInterface {
  type: TextInputMaskTypeProp;
  options: TextInputMaskOptionProp | undefined;
}

interface InputInterface {
  value: string;
  onChangeText: (text: String) => void;
  onBlur?: VoidFunction;
  label?: string;
  placeholder?: string;
  error: FieldError | undefined;
  secureTextEntry?: boolean;
  mask?: maskInterface;
}

const Input = ({
  value,
  onChangeText,
  onBlur,
  label,
  placeholder = "",
  error,
  mask,
  ...args
}: InputInterface) => {
  return (
    <InputContainer>
      <FlexBox>
        <Label>{label}</Label>
        <Error>{error ? error.message : null}</Error>
      </FlexBox>
      {mask ? (
        <InputFieldMasked
          placeholder={placeholder}
          value={value}
          type={mask.type}
          options={mask.options}
          onChangeText={(text: string) => onChangeText(text)}
          onBlur={onBlur}
          {...args}
        />
      ) : (
        <InputField
          placeholder={placeholder}
          value={value}
          onChangeText={(text: string) => onChangeText(text)}
          onBlur={onBlur}
          {...args}
        />
      )}
    </InputContainer>
  );
};

export default Input;
