import React from "react";
import {
  HeaderView,
  IconBack,
  IconBackView,
  IconBook,
  IconBookView,
} from "./styles";

const BackHeader = () => {
  return (
    <HeaderView>
      <IconBackView>
        <IconBack source={require("../../assets/voltar.svg")} />
      </IconBackView>
      <IconBookView>
        <IconBook source={require("../../assets/Livrinho.svg")} />
      </IconBookView>
    </HeaderView>
  );
};

export default BackHeader;
