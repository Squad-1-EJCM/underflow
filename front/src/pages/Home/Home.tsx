import { View } from "react-native";
import CategoriesCarousel from "../../components/CategoriesCarousel/CategoriesCarousel";
import BooksCarousel from "../../components/BooksCarousel/BooksCarousel";
import { HomeCarousel, Title } from "./style";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  return (
    <ScrollView>
      <CategoriesCarousel />
      <HomeCarousel>
        <Title>Novas Publicações</Title>
        <BooksCarousel />
      </HomeCarousel>
      <HomeCarousel>
        <Title>Mais Favoritos</Title>
        <BooksCarousel />
      </HomeCarousel>
    </ScrollView>
  );
};

export default Home;
