import React from "react";
import {
  HeaderView,
  IconBook,
 
} from "./styles";
import { Image } from "react-native";

const PurchaseHeader = () => {
  return (
    <HeaderView>
      <IconBook source={require("../../assets/Livrinho.svg")} />
    </HeaderView>
  );
};

export default PurchaseHeader;
