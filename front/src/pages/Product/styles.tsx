import styled from "styled-components/native";

export const SpacingContainer = styled.View<{
  padding?: string;
  margin?: string;
}>`
  padding: ${({ padding }) => (padding ? padding : 0)};
  margin: ${({ margin }) => (margin ? margin : 0)};
`;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

export const ImageContainer = styled.View`
  width: 100%;
  position: relative;
  height: 200px;

  margin-bottom: 3rem;
`;

export const ImgBg = styled.ImageBackground`
  filter: blur(1px);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
`;

/* export const BlurOverlay = styled(BlurView)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`; */

export const Cover = styled.Image`
  height: 100%;
  width: 150px;
  z-index: 10;
  position: absolute;
  left: 50%;
  transform: translateX(-75px);
`;

export const Content = styled.View`
  margin: 0 16px;
`;

export const Title = styled.Text`
  font-size: 2.5rem;
  font-family: "Ubuntu Medium";
  color: #33415c;
`;

export const GridBox = styled.View`
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 2.5rem;
  align-items: center;

  margin-top: 0.5rem;
`;

export const SimpleText = styled.Text`
  font-size: 1rem;
  color: #33415c;
  font-family: "Ubuntu Medium";
`;

export const Star = styled.Image`
  justify-self: flex-end;
`;

export const GhostText = styled.Text`
  color: #979dac;
  font-size: 1.25rem;
  font-family: "Ubuntu Medium";
  margin: 2rem 0;
`;

export const PriceFlexBox = styled.View`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  align-items: flex-end;
  margin-bottom: 2rem;
`;

export const Price = styled.Text`
  font-size: 2.5rem;
  font-family: "Ubuntu Medium";
  color: #33415c;
`;

export const OldPrice = styled.Text`
  color: #979dac;
  font-size: 1.25rem;
  font-family: "Ubuntu Medium";
  margin-bottom: 0.25rem;
`;

export const Underlined = styled.Text`
  position: relative;
`;
export const Underline = styled.View`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-1px);
  height: 2px;
  width: 100%;
  background: #979dac;
`;

export const StrongText = styled.Text`
  color: #33415c;
  font-size: 1.25rem;
  font-family: "Ubuntu Medium";
  margin-bottom: 0.5rem;
`;

export const PublisherFlexBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 3rem 0;
`;

export const PublisherData = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PublisherName = styled.Text`
  color: #33415c;
  font-size: 1.25rem;
  font-family: "Ubuntu Medium";
`;

export const Report = styled.Text`
  color: #f3384e;
  font-size: 1rem;
`;

export const InformationTitle = styled.Text`
  font-size: 1.6rem;
  color: #33415c;
  margin-top: 3.5rem;
  margin-bottom: 1rem;
`;

export const InformationContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #33415c;
  border-radius: 0.75rem;
  padding: 1rem 0.5rem;
`;

export const Separator = styled.View`
  width: 100%;
  height: 2px;
  background: #33415c;
  margin: 0.75rem 0;
`;
