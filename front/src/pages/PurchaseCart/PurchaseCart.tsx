import React from "react";
import { Title } from "../Home/style";
import PurchaseButtons from "../../components/PurchaseButtons/PurchaseButtons";
import VerticalBookCard from "../../components/VerticalBookCard/VerticalBookCard";
import { ButtonsContainer, FinishPurchaseView, TextView } from "./styles";
import BackHeader from "../../components/BackHeader/BackHeader";
import Button from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../routes/drawer.routes";

type CartScreen = DrawerNavigationProp<RootDrawerParamList, "Cart">;

const PurchaseCart = () => {
  const navigation = useNavigation<CartScreen>();
  return (
    <FinishPurchaseView>
      <BackHeader />
      <TextView>
        <Title>Carrinho</Title>
      </TextView>
      <VerticalBookCard />
      <ButtonsContainer>
        <Button
          text="Avançar"
          onClick={() => navigation.navigate("FinishPurchase")}
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

export default PurchaseCart;
