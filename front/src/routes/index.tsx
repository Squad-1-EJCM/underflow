import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import RootStackRoutes from "./stack.routes";

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
