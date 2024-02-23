import styled from "styled-components/native";

export interface BtnStyledInterface {
  background?: string;
  color?: string;
  font?: string;
  radius?: string;
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
}

export const Btn = styled.Pressable<BtnStyledInterface>`
  background: ${({ background }) => (background ? background : "#023E8A")};
  padding-right: ${({ paddingRight, padding }) =>
    paddingRight ? paddingRight : padding ? padding : ".975rem"};
  padding-left: ${({ paddingLeft, padding }) =>
    paddingLeft ? paddingLeft : padding ? padding : ".975rem"};
  padding-top: ${({ paddingTop, padding }) =>
    paddingTop ? paddingTop : padding ? padding : ".975rem"};
  padding-bottom: ${({ paddingBottom, padding }) =>
    paddingBottom ? paddingBottom : padding ? padding : ".975rem"};

  width: 100%;
  border-radius: ${({ radius }) => (radius ? radius : "0.75rem")};

  display: flex;
  align-items: center;
`;

export const BtnText = styled.Text<BtnStyledInterface>`
  color: ${({ color }) => (color ? color : "#F1F4FF")};
  font-size: ${({ font }) => (font ? font : "1.25rem")};
  font-weight: 500;
  font-family: "Ubuntu Medium";
`;
