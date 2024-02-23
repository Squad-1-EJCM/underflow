import { DrawerContentScrollView } from "@react-navigation/drawer";
import {
  NavItem,
  Icon,
  Name,
  Nav,
  PhotoView,
  ProfilePhoto,
  Subtitles,
  TopView,
  TotalView,
} from "./styles";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../stack.routes";
import { useUserContext } from "../../contexts/UserContext";
import authenticate from "../../utils/authenticate";
import userService from "../../services/userService.ts";

type HomeDrawerParamList = {
  home: undefined;
  Profile: undefined;
};

type SideMenu = DrawerNavigationProp<RootStackParamList & HomeDrawerParamList>;

const sizeD = 30;
const CustomDrawerContent: React.FC = () => {
  const navigation = useNavigation<SideMenu>();
  const { user, setUser } = useUserContext();

  const logoutHandler = async () => {
    const response = await userService
      .logout()
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((e) => {
        console.log(e);
      });
    console.log(response);
    // Se a resposta for positiva, o usuário vai para a página de conclusão
    if (response?.status === 200) {
      setUser(null);
      navigation.navigate("Login");
    }
  };

  return (
    <DrawerContentScrollView>
      <TotalView>
        <TopView>
          <PhotoView>
            <ProfilePhoto
              source={
                user?.imgUrl
                  ? {
                      uri: user.imgUrl,
                    }
                  : require("../../assets/user.jpg")
              }
            />
          </PhotoView>
          <Name>
            {user?.name ? `${user.name} ${user.lastName}` : "Convidado"}
          </Name>
        </TopView>
        <Nav>
          <NavItem
            onPress={() =>
              authenticate(
                user,
                () => navigation.navigate("Profile"),
                () => {
                  console.log("Visitante");
                }
              )
            }
          >
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
          <NavItem onPress={logoutHandler}>
            <Icon source={require("../../assets/sair_i.svg")} />
            <Subtitles>Sair</Subtitles>
          </NavItem>
        </Nav>
      </TotalView>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
