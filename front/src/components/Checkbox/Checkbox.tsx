import React from "react";
import { CheckSVG, CheckboxContainer, CheckboxInput, Label } from "./styles";
import Check from "../../assets/check.svg";

interface CheckboxInterface {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
}

const Checkbox = ({ checked, setChecked, label }: CheckboxInterface) => {
  return (
    <div>
      <CheckboxContainer>
        <CheckboxInput
          onPress={() => {
            setChecked(!checked);
          }}
        >
          <CheckSVG source={Check} checked={checked} />
        </CheckboxInput>
        <Label onPress={() => setChecked(!checked)}>{label}</Label>
      </CheckboxContainer>
    </div>
  );
};

export default Checkbox;
