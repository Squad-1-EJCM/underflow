import React from "react";
import {
  HeaderView,
  IconBack,
  IconBackView,
  IconBook,
  IconBookView,
} from "./styles";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../routes/drawer.routes";
import { useNavigation } from "@react-navigation/native";

type ProductScreen = DrawerNavigationProp<RootDrawerParamList>;

const BackHeader = () => {
  const navigation = useNavigation<ProductScreen>();
  return (
    <HeaderView>
      <IconBackView onPress={() => navigation.goBack()}>
        <IconBack source={require("../../assets/voltar.svg")} />
      </IconBackView>
      <IconBookView onPress={() => navigation.navigate("home")}>
        <IconBook source={require("../../assets/Livrinho.svg")} />
      </IconBookView>
    </HeaderView>
  );
};

export default BackHeader;
