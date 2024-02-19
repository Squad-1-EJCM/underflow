import styled from "styled-components/native";

export const CheckboxContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`;

export const CheckboxInput = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;

  background: black;

  width: 1.5rem;
  height: 1.5rem;

  background: #f1f4ff;
  border-radius: 0.25rem;
  border: 1px solid #33415c;
`;

interface CheckSVGInterface {
  checked: boolean;
}

export const CheckSVG = styled.Image<CheckSVGInterface>`
  width: 1rem;
  height: 1rem;

  display: ${({ checked }) => (checked ? "block" : "none")};
`;

export const Label = styled.Text`
  font-size: 1rem;
  color: #33415c;

  font-family: "Ubuntu Regular";
`;
