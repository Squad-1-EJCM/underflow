import React from "react";
import { View } from "react-native";
import {
  FinishScreenView,
  Information,
  InformationView,
  Logo,
  LogoView,
  TextInformationView,
  Action,
  ButtonView,
} from "./styles";
import Button from "../../components/Button/Button";

const FinishScreen = () => {
  return (
    <FinishScreenView>
      <LogoView>
        <Logo source={require("../../assets/LogoFinishScreen.svg")} />
      </LogoView>
      <Action>Compra finalizada!</Action>
      <TextInformationView>
        <InformationView>
          <Information>
            O vendedor terá até 5 dias úteis para o envio do(s) produto(s), caso
            o encaminhamento não ocorra no prazo 100% do valor da compra será
            reembolsado.
          </Information>
        </InformationView>
        <InformationView>
          <Information>
            “A leitura engrandece a alma” — Voltaire, Filósofo Iluminista.
          </Information>
        </InformationView>
      </TextInformationView>
      <ButtonView>
        <Button text="Voltar ao Início" onClick={() => {}} />
      </ButtonView>
    </FinishScreenView>
  );
};

export default FinishScreen;
