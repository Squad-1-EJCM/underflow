import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RegisterContextProvider from "../contexts/RegisterContext";
import DrawerRoutes from "./drawer.routes";
import { useNavigation } from "@react-navigation/native";
import { useUserContext } from "../contexts/UserContext";
import React from "react";
import userService from "../services/userService.ts";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

type Auth = NativeStackNavigationProp<RootStackParamList, "Register">;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackRoutes() {
  const navigation = useNavigation<Auth>();
  const { setUser } = useUserContext();
  React.useEffect(() => {
    async function getUser() {
      const response = await userService
        .getDetails()
        .then((response) => {
          console.log(response);
          return response;
        })
        .catch((e) => {
          console.log(e);
        });
      // Se a resposta for positiva, o usuário vai para a página home
      if (response?.status === 200) {
        setUser(response.data);
        console.log(response.data);
        navigation.navigate("Home");
      }
    }
    getUser();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={RegisterWithContext} />
      <Stack.Screen name="Home" component={DrawerRoutes} />
    </Stack.Navigator>
  );
}

function RegisterWithContext() {
  return (
    <RegisterContextProvider>
      <Register />
    </RegisterContextProvider>
  );
}
