import React, { ComponentProps } from "react";
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
import { TextInputProps } from "react-native";

interface maskInterface {
  type: TextInputMaskTypeProp;
  options: TextInputMaskOptionProp | undefined;
}

interface InputInterface
  extends Omit<
    TextInputProps,
    | "value"
    | "onChangeText"
    | "onBlur"
    | "secureTextEntry"
    | "placeholderTextColor"
  > {
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: VoidFunction;
  label?: string;
  placeholder?: string;
  error: FieldError | undefined;
  secureTextEntry?: boolean;
  mask?: maskInterface;
  multiline?: boolean;
  numberOfLines?: number;
  marginBottom?: string;
}

const Input: React.FC<InputInterface> = ({
  value,
  onChangeText,
  onBlur,
  label,
  placeholder = "",
  error,
  mask,
  marginBottom,
  ...args
}: InputInterface) => {
  return (
    <InputContainer marginBottom={marginBottom}>
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
