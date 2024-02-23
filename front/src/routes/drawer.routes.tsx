import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./DrawerNavigation/DrawerNavigation";
import Profile from "../pages/Profile/Profile";
import Home from "../pages/Home/Home";
import UpdateUser from "../pages/UpdateUser/UpdateUser";

export type RootDrawerParamList = {
  Profile: undefined;
  home: undefined;
  EditProfile: undefined;
};

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
      initialRouteName="home"
    >
      <Drawer.Screen name="home" component={Home} />

      <Drawer.Screen
        name="Profile"
        options={{ headerShown: false }}
        component={Profile}
      />
      <Drawer.Screen
        name="EditProfile"
        options={{ headerShown: false }}
        component={UpdateUser}
      />
    </Drawer.Navigator>
  );
}
