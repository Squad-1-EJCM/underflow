import LottieView from "lottie-react-native";
import React from "react";
import {
  BottomDetail,
  ButtonContainer,
  Container,
  Text,
  UpperDetail,
} from "./styles";
import Button from "../Button/Button";

const SuccessPage = () => {
  const animationRef = React.useRef<LottieView | null>(null);

  React.useEffect(() => {
    if (animationRef.current !== null) {
      setTimeout(() => {
        animationRef.current?.pause();
      }, 2100);
    }
  }, [animationRef]);

  return (
    <Container>
      <UpperDetail source={require("../../assets/Detail.png")} />
      <LottieView
        style={{ transform: [{ scale: 1.8 }] }}
        ref={animationRef}
        source={require("../../assets/success-animation.json")}
        autoPlay
        loop={false}
        progress={1} // Set progress to 1 to show the animation fully scaled
      />
      <Text>Conta criada com sucesso!</Text>

      <ButtonContainer>
        <Button
          text="Entrar na sua conta"
          onClick={() => {}}
          padding=".5rem"
          paddingLeft="1.25rem"
          paddingRight="1.25rem"
          radius=".25rem"
        />
      </ButtonContainer>
      <BottomDetail source={require("../../assets/Horizontal-wave.png")} />
    </Container>
  );
};

export default SuccessPage;
