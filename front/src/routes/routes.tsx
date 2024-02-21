import { NavigationContainer } from "@react-navigation/native";
import {Text} from 'react-native'
import DrawerRoutes from './DrawerNavigation/DrawerNavigation'

export default function Routes() {
  return (
    <NavigationContainer>
        <DrawerRoutes/>
    </NavigationContainer>
  )
}
