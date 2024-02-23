import React from "react";
import { View, Text, Image } from "react-native";
import PurchaseHeader from "../../components/PurchaseHeader/PurchaseHeader";
import { Title } from "../Home/style";
import VerticalBookCard from "../../components/VerticalBookCard/VerticalBookCard";
import { AccordionView, FinishPurchaseView, TextView } from "./styles";
import AccordionItem from "../../components/AccordionItem/AccordionItem";
import PurchaseButtons from "../../components/PurchaseButtons/PurchaseButtons";

const items1 = [
  { title: "Escolha o método de pagamento", content: "Cartão de crédito" },
];
const items2 = [
  { title: "Selecione o endereço de entrega", content: "RJ - Queimados, Pacaembu. Rua Coruja, 106" },
];

const FinishPurchase = () => {
  return (
    <FinishPurchaseView>
      <PurchaseHeader />
      <TextView>
        <Title>Finalizando compra</Title>
      </TextView>
      <VerticalBookCard />
      <AccordionView>
        <AccordionItem items={items1} />
        <AccordionItem items={items2} />  
      </AccordionView>
      <PurchaseButtons/>
    </FinishPurchaseView>
  );
};

export default FinishPurchase;
