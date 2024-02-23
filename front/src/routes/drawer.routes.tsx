import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./DrawerNavigation/DrawerNavigation";
import Profile from "../pages/Profile/Profile";
import Home from "../pages/Home/Home";
import UpdateUser from "../pages/UpdateUser/UpdateUser";
import AddProduct from "../pages/AddProduct/AddProduct";
import Product from "../pages/Product/Product";
import PurchaseCart from "../pages/PurchaseCart/PurchaseCart";
import FinishPurchase from "../pages/FinishPurchase/FinishPurchase";

export type RootDrawerParamList = {
  Profile: undefined;
  home: undefined;
  EditProfile: undefined;
  AddProduct: undefined;
  Product: undefined;
  Cart: undefined;
  FinishPurchase: undefined;
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
      <Drawer.Screen
        name="AddProduct"
        options={{ headerShown: false }}
        component={AddProduct}
      />
      <Drawer.Screen
        name="Product"
        options={{ headerShown: false }}
        component={Product}
      />
      <Drawer.Screen
        name="Cart"
        options={{ headerShown: false }}
        component={PurchaseCart}
      />
      <Drawer.Screen
        name="FinishPurchase"
        options={{ headerShown: false }}
        component={FinishPurchase}
      />
      {/* <Drawer.Screen
        name="Product"
        options={{ headerShown: false }}
        component={Product}
      /> */}
    </Drawer.Navigator>
  );
}
