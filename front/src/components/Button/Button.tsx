import React from "react";
import { Btn, BtnStyledInterface, BtnText } from "./styles";

interface ButtonInterface extends BtnStyledInterface {
  text: string;
  onClick: VoidFunction;
}

const Button = ({ text, onClick, ...args }: ButtonInterface) => {
  return (
    <Btn onPress={onClick} {...args}>
      <BtnText {...args}>{text}</BtnText>
    </Btn>
  );
};

export default Button;
