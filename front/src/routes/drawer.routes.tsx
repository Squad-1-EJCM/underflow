import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./DrawerNavigation/DrawerNavigation";
import Home from "../pages/Home/Home";

const Drawer = createDrawerNavigator();

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
