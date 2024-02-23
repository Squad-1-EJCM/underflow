import React from "react";
import { FlatList, Image, Pressable, ScrollView, View } from "react-native";
import {
  AddProduct,
  CarouselContainer,
  GhostText,
  Header,
  HeaderTextContainer,
  MainText,
  MediumText,
  SmallText,
} from "./styles";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import axios from "axios";
import CardBook from "../../components/BookCard/BookCard";
import NotFound from "../../components/NotFound/NotFound";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../routes/drawer.routes";
import { useNavigation } from "@react-navigation/native";
import { useUserContext } from "../../contexts/UserContext";
import formatPrice from "../../utils/formatPrice";

type ProfileScreen = DrawerNavigationProp<RootDrawerParamList, "Profile">;

const Profile = () => {
  const id = 1;
  const navigation = useNavigation<ProfileScreen>();

  const { user } = useUserContext();
  const mock = require("../../../mocks/user.json");
  console.log(mock);

  if (user && mock)
    return (
      <ScrollView>
        <Header>
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={require("../../assets/return.svg")} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("EditProfile")}>
            <Image source={require("../../assets/pen-to-square-solid 1.svg")} />
          </Pressable>
        </Header>

        <HeaderTextContainer>
          <ProfilePicture
            image={
              user?.imgUrl
                ? {
                    uri: user.imgUrl,
                  }
                : require("../../assets/user.jpg")
            }
            size="9.25rem"
          />
          <MainText>{`${user.name} ${user.lastName}`}</MainText>
          <GhostText>{user.city}</GhostText>
        </HeaderTextContainer>

        <CarouselContainer>
          <MediumText>Produtos</MediumText>
          {/* <
            imgUrl={require("../../assets/no-products.png")}
            text="Este usuário não possui produtos publicados"/> */}
          <FlatList
            data={[
              ...mock.publishedBooks,
              { title: null, imgUrl: null, discount: null, price: null! },
            ]}
            renderItem={({ item }) =>
              item.title === null ? (
                <AddProduct>
                  <Image source={require("../../assets/Plus.svg")} />
                  <SmallText>Adicionar produto</SmallText>
                </AddProduct>
              ) : (
                <CardBook
                  title={item.title}
                  imgURL={item.imgUrl}
                  oldPrice=""
                  price={formatPrice(Number(item.price))}
                />
              )
            }
            keyExtractor={(item, index) =>
              item.title ? item.title! + index : "Adicionar"
            }
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </CarouselContainer>

        <CarouselContainer>
          <MediumText>Favoritos</MediumText>
          {mock.favoritedBooks ? (
            <FlatList
              data={mock.favoritedBooks}
              renderItem={({ item }) => (
                <CardBook
                  title={item.title}
                  imgURL={item.imgUrl}
                  oldPrice=""
                  price={formatPrice(Number(item.price))}
                />
              )}
              keyExtractor={(item) => item.title}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <NotFound
              imgUrl={require("../../assets/no-favorites.png")}
              text="Este usuário não possui livros favoritados"
            />
          )}
        </CarouselContainer>
      </ScrollView>
    );
  else return null;
};

export default Profile;
