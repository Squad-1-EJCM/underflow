import { DrawerContentScrollView } from "@react-navigation/drawer";
import {
  NavItem,
  Icon,
  Name,
  Nav,
  PhotoView,
  ProfilePhoto,
  Separator,
  Subtitles,
  TopView,
  TotalView,
} from "./styles";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../stack.routes";

type HomeDrawerParamList = {
  home: undefined;
  Profile: undefined;
};

type SideMenu = DrawerNavigationProp<RootStackParamList & HomeDrawerParamList>;

const sizeD = 30;
const CustomDrawerContent: React.FC = () => {
  const navigation = useNavigation<SideMenu>();
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
        <Nav>
          <NavItem onPress={() => navigation.navigate("Profile")}>
            <Icon source={require("../../assets/perfil_i.svg")} />
            <Subtitles>Perfil</Subtitles>

          </NavItem>
          <NavItem onPress={() => navigation.navigate("home")}>
            <Icon source={require("../../assets/home_i.svg")} />
            <Subtitles>Home</Subtitles>
          </NavItem>
          <NavItem>
            <Icon source={require("../../assets/favoritos_i.svg")} />
            <Subtitles>Favoritos</Subtitles>
          </NavItem>
          <NavItem>
            <Icon source={require("../../assets/carrinho_i.svg")} />
            <Subtitles>Carrinho</Subtitles>
          </NavItem>
          <NavItem>
            <Icon source={require("../../assets/caderno_i.svg")} />
            <Subtitles>Histórico de compras</Subtitles>
          </NavItem>
          <NavItem onPress={() => navigation.navigate("Login")}>
            <Icon source={require("../../assets/sair_i.svg")} />
            <Subtitles>Sair</Subtitles>
          </NavItem>
        </Nav>

      </TotalView>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
