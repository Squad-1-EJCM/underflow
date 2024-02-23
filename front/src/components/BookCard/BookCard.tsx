import React from "react";
import { View, Image } from "react-native";
import {
  BookImage,
  Card,
  BottomView,
  Title,
  PriceMinor,
  PriceMajor,
  ImageView,
  IconCart,
  InferiorView,
  LeftView,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

interface CardBookInterface {
  id: string;
  title: string;
  oldPrice: string;
  price: string;
  imgURL: string;
}

const CardBook = ({
  id,
  title,
  oldPrice,
  price,
  imgURL,
}: CardBookInterface) => {
  const navigation = useNavigation();
  return (
    <Card
      onPress={() =>
        navigation.navigate("Product", {
          itemId: id,
        })
      }
    >
      <ImageView>
        <BookImage source={{ uri: imgURL }} />
      </ImageView>
      <InferiorView>
        <Title numberOfLines={2} ellipsizeMode="tail">
          {title}
        </Title>
        <BottomView>
          <LeftView>
            <PriceMinor>{oldPrice}</PriceMinor>
            <PriceMajor>{price}</PriceMajor>
          </LeftView>
          <IconCart source={require("../../assets/CartIcon.svg")} />
        </BottomView>
      </InferiorView>
    </Card>
  );
};

export default CardBook;
