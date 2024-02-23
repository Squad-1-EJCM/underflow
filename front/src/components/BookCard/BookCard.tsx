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
  LeftView
} from "./styles";

interface CardBookInterface{
  title: string
  oldPrice:string
  price:string
  imgURL:string
}


const CardBook = ({title, oldPrice, price, imgURL}: CardBookInterface) => {
  return (
    <Card>
      <ImageView>
        <BookImage source={{uri: imgURL}} />
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
