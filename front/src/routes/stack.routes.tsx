import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RegisterContextProvider from "../contexts/RegisterContext";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={RegisterWithContext} />
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
