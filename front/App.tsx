import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/HomeHeader/HomeHeader";
import CategoriesCarousel from "./src/components/CategoriesCarousel/CategoriesCarousel";

export default function App() {
  return (
    <View>
      <Header />
      <CategoriesCarousel />
    </View>
  );
}
