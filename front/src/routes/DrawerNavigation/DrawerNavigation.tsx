import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import Home from "../../pages/Home/Home";
import {
  Container,
  Icon,
  Name,
  OptionsView,
  PhotoView,
  ProfilePhoto,
  Separator,
  Subtitles,
  TopView,
  TotalView,
} from "./styles";

const sizeD = 30;
const Drawer = createDrawerNavigator();
const CustomDrawerContent: React.FC = () => {
  return (
    <DrawerContentScrollView>
      <TotalView>
        <TopView>
          <PhotoView>
            <ProfilePhoto
              source={{
                uri: "https://images.unsplash.com/photo-1708024587407-73445142b5a8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
            />
          </PhotoView>
          <Name>Nome de usuário</Name>
        </TopView>
        <OptionsView>
          <Container>
            <Icon source={require("../../assets/perfil_i.svg")} />
            <Subtitles>Perfil</Subtitles>
          </Container>
          <Separator></Separator>
          <Container>
            <Icon source={require("../../assets/home_i.svg")} />
            <Subtitles>Home</Subtitles>
          </Container>
          <Separator></Separator>
          <Container>
            <Icon source={require("../../assets/favoritos_i.svg")} />
            <Subtitles>Favoritos</Subtitles>
          </Container>
          <Separator></Separator>
          <Container>
            <Icon source={require("../../assets/carrinho_i.svg")} />
            <Subtitles>Carrinho</Subtitles>
          </Container>
          <Separator></Separator>
          <Container>
            <Icon source={require("../../assets/caderno_i.svg")} />
            <Subtitles>Histórico de compras</Subtitles>
          </Container>
          <Separator></Separator>
          <Container>
            <Icon source={require("../../assets/sair_i.svg")} />
            <Subtitles>Sair</Subtitles>
          </Container>
          <Separator></Separator>
        </OptionsView>
      </TotalView>
    </DrawerContentScrollView>
  );
};
export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        headerTintColor: "#33415C",
        title: "",
        headerStyle: {
          backgroundColor: "#F1F4FF",
        },
        drawerStyle: {
          backgroundColor: "#F1F4FF",
        },
      }}
    >
      <Drawer.Screen name="home" component={Home} />
    </Drawer.Navigator>
  );
}
