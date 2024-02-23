import React from "react";
import { BackButton, ButtonView, FinalizeButton } from "./styles";

const PurchaseButtons = () => {
  return (
    <ButtonView>
      <FinalizeButton>Finalizar compra</FinalizeButton>
      <BackButton>Voltar</BackButton>
    </ButtonView>
  );
};

export default PurchaseButtons;
