import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RegisterContextProvider from "../contexts/RegisterContext";
import DrawerRoutes from "./drawer.routes";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

/* export type ProfileStackParamList = {
  profile: undefined;
  EditProfile: undefined;
  AddProduct: undefined;
}; */

const Stack = createNativeStackNavigator<RootStackParamList>();
/* const ProfileStack = createNativeStackNavigator<ProfileStackParamList>(); */

export default function RootStackRoutes() {
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

/* export function ProfileStackRoutes() {
  return (
    <ProfileStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="profile"
    >
      <ProfileStack.Screen name="profile" component={Profile} />
      <ProfileStack.Screen name="EditProfile" component={UpdateUser} />
    </ProfileStack.Navigator>
  );
} */

function RegisterWithContext() {
  return (
    <RegisterContextProvider>
      <Register />
    </RegisterContextProvider>
  );
}
