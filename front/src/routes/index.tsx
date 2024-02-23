import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  useNavigation,
} from "@react-navigation/native";
import RootStackRoutes from "./stack.routes";
import { useUserContext } from "../contexts/UserContext";
import userService from "../services/userService.ts";

export default function Routes() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#ffffff",
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <RootStackRoutes />
    </NavigationContainer>
  );
}
