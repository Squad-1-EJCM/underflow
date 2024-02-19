import styled from "styled-components/native";

export interface BtnStyledInterface {
  background?: string;
  color?: string;
  font?: string;
  padding?: string;
}

export const Btn = styled.Pressable<BtnStyledInterface>`
  background: ${({ background }) => (background ? background : "#023E8A")};
  padding: ${({ padding }) => (padding ? padding : ".975rem")};

  width: 100%;
  border-radius: 0.75rem;

  display: flex;
  align-items: center;
`;

export const BtnText = styled.Text<BtnStyledInterface>`
  color: ${({ color }) => (color ? color : "#F1F4FF")};
  font-size: ${({ font }) => (font ? font : "1.25rem")};
  font-weight: 500;
  font-family: "Ubuntu Medium";
`;
