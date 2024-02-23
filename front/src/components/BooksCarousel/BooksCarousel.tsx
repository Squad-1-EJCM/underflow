import React from "react";
import { View, Image, FlatList } from "react-native";
import CardBook from "../BookCard/BookCard";
import { ItemView, Title, Container } from "../BooksCarousel/styles";
import { PriceMajor, PriceMinor } from "../BookCard/styles";
import formatPrice from "../../utils/formatPrice";

type ItemProps = {
  imageUrl: string;
  title: string;
  oldPrice: string;
  newPrice: string;
  marginLeft: string;
};

const Item = ({
  imageUrl,
  oldPrice,
  newPrice,
  title,
  marginLeft,
}: ItemProps) => {
  <ItemView marginLeft={marginLeft ? marginLeft : "0px"}>
    <Image source={{ uri: imageUrl }} />
    <Title>{title}</Title>
    <PriceMinor>{newPrice}</PriceMinor>
    <PriceMajor>{oldPrice}</PriceMajor>
  </ItemView>;
};

const BooksCarousel = () => {
  const { livros: values } = require("../../../mocks/products.json");
  return (
    <Container>
      <FlatList
        data={values}
        renderItem={({ item }) => (
          <CardBook
            id={item.id}
            title={item.title}
            imgURL={item.imagem_url}
            oldPrice={formatPrice(item.preco)}
            price={
              item.desconto
                ? formatPrice(
                    (Number(item.preco) * Number(item.desconto)) / 100
                  )
                : item.preco
            }
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default BooksCarousel;
