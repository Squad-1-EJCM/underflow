import React from "react";
import { FlatList, Image, Pressable, View } from "react-native";
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
import CardBook from "../../components/CardBook/CardBook";
import NotFound from "../../components/NotFound/NotFound";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../routes/drawer.routes";
import { useNavigation } from "@react-navigation/native";

type ProfileScreen = DrawerNavigationProp<RootDrawerParamList, "Profile">;

export interface User {
  id: number;
  cpf: string;
  email: string;
  name: string;
  lastName: string;
  state: string;
  city: string;
  neighborhood: string;
  cep: string;
  street: string;
  houseNumber: string;
  addressSupplement?: string;
  birthday: Date;
  phoneNumber: string;
  imgUrl?: string;
  favoritedBooks: Book[];
  publishedBooks: Book[];
}

interface Book {
  id: number;
  title: string;
  price: string;
  discount?: string;
  imgUrl: string;
}

const Profile = () => {
  const id = 1;
  const [data, setData] = React.useState<User | null>(null);
  const navigation = useNavigation<ProfileScreen>();

  React.useEffect(() => {
    async function requestData() {
      const request = await axios.get("mocks/user.json");
      const data = request.data as User;
      const { status } = request;
      console.log(data);
      if (status === 200 && data) {
        setData(data);
      }
    }
    requestData();
  }, [id]);

  if (data)
    return (
      <View>
        <Header>
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={require("../../assets/return.svg")} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("EditProfile")}>
            <Image source={require("../../assets/pen-to-square-solid 1.svg")} />
          </Pressable>
        </Header>
        <ProfilePicture
          image={require("../../assets/profile.svg")}
          size="9.25rem"
        />
        <HeaderTextContainer>
          <MainText>{`${data.name} ${data.lastName}`}</MainText>
          <GhostText>{data.city}</GhostText>
        </HeaderTextContainer>

        <CarouselContainer>
          <MediumText>Produtos</MediumText>
          {/* <NotFound
            imgUrl={require("../../assets/no-products.png")}
            text="Este usuário não possui produtos publicados"
          ></NotFound> */}
          <FlatList
            data={[
              ...data.favoritedBooks,
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
                  title={item.title!}
                  imgURL={item.imgUrl!}
                  oldPrice=""
                  price={item.price!}
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
          {/* <NotFound
            imgUrl={require("../../assets/no-favorites.png")}
            text="Este usuário não possui livros favoritados"
          ></NotFound> */}
          <FlatList
            data={data.favoritedBooks}
            renderItem={({ item }) => (
              <CardBook
                title={item.title}
                imgURL={item.imgUrl}
                oldPrice=""
                price={item.price}
              />
            )}
            keyExtractor={(item) => item.title}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </CarouselContainer>
      </View>
    );
  else return null;
};

export default Profile;
