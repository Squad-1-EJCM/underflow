import styled from "styled-components/native";

export const Header = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem 1rem;
`;

export const MainText = styled.Text`
  font-size: 2rem;
  color: #33415c;
  font-family: "Ubuntu Medium";
  text-align: center;
`;

export const MediumText = styled.Text`
  font-size: 1.5rem;
  color: #33415c;
  font-family: "Ubuntu Medium";
  margin-left: 1rem;
`;

export const SmallText = styled.Text`
  font-size: 1.25rem;
  color: #33415c;
  font-family: "Ubuntu Regular";
  text-align: center;
`;

export const GhostText = styled.Text`
  font-size: 1rem;
  color: #979dac;
  font-family: "Ubuntu Regular";
  text-align: center;

  margin-bottom: 2.5rem;
`;

export const HeaderTextContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  margin: 0.75rem 0 2.5rem;
`;

export const CarouselContainer = styled.View`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 3.5rem;
`;

export const AddProduct = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: #f1f4ff;

  margin: 0.625rem;
  border-radius: 0.5rem;

  box-shadow: rgba(0, 0, 0, 0.25) 2px 2px 4px;

  width: 192px;
  height: 304px;
`;
