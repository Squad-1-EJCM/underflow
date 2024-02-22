import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Text } from "react-native";
import DrawerRoutes from "./DrawerNavigation/DrawerNavigation";
import StackRoutes from "./stack.routes";

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
      <StackRoutes />
    </NavigationContainer>
  );
}
