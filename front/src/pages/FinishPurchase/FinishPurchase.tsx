import React from "react";
import { View, Text, Image } from "react-native";
import PurchaseHeader from "../../components/PurchaseHeader/PurchaseHeader";
import { Title } from "../Home/style";
import VerticalBookCard from "../../components/VerticalBookCard/VerticalBookCard";
import {
  AccordionView,
  ButtonsContainer,
  FinishPurchaseView,
  TextView,
} from "./styles";
import AccordionItem from "../../components/AccordionItem/AccordionItem";
import PurchaseButtons from "../../components/PurchaseButtons/PurchaseButtons";
import Button from "../../components/Button/Button";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../routes/drawer.routes";
import { useNavigation } from "@react-navigation/native";

const items1 = [
  { title: "Escolha o método de pagamento", content: "Cartão de crédito" },
];
const items2 = [
  {
    title: "Selecione o endereço de entrega",
    content: "RJ - Queimados, Pacaembu. Rua Coruja, 106",
  },
];

type FinishPurchaseScreen = DrawerNavigationProp<
  RootDrawerParamList,
  "FinishPurchase"
>;

const FinishPurchase = () => {
  const navigation = useNavigation<FinishPurchaseScreen>();
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
      <ButtonsContainer>
        <Button
          text="Finalizar compra"
          onClick={() => navigation.navigate("home")}
        />
        <Button
          text="Voltar"
          onClick={() => navigation.goBack()}
          background="#F1F4FF"
          color="#023E8A"
        />
      </ButtonsContainer>
    </FinishPurchaseView>
  );
};

export default FinishPurchase;
