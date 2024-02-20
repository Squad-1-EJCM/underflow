import React from "react";
import { FlatList } from "react-native";
import { Container, Title, ItemView } from "./styles";

const data = [
  {
    id: "1",
    title: "Terror",
    marginLeft: '16px'
  },
  {
    id: "2",
    title: "Aventura",
  },
  {
    id: "3",
    title: "Fantasia",
  },
  {
    id: "4",
    title: "Contos",
  },
  {
    id: "5",
    title: "Romance",
  },
  {
    id: "6",
    title: "Poesia",
  },
  {
    id: "7",
    title: "Ficção científica",
  },
];

type ItemProps = { title: string, marginLeft:string };

const Item = ({ title,marginLeft }: ItemProps) => (
  <ItemView marginLeft={marginLeft ? marginLeft : "0px"}>
    <Title>{title}</Title>
  </ItemView>
);



const CategoriesCarousel = () => {
  return (
    <Container>
      <FlatList
        data={data}
        renderItem={({item}) => <Item title={item.title} marginLeft={item.marginLeft!} />}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </Container>
  );
};

export default CategoriesCarousel;
