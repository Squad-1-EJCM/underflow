import { View } from "react-native";
import CategoriesCarousel from "../../components/CategoriesCarousel/CategoriesCarousel";
import BooksCarousel from "../../components/BooksCarousel/BooksCarousel";
import { HomeCarousel, Title } from "./style";

const Home = () => {
  return (
    <View>
      <CategoriesCarousel />
      <HomeCarousel>
        <Title>Novas Publicações</Title>
        <BooksCarousel />
      </HomeCarousel>
      <HomeCarousel>
        <Title>Mais Favoritos</Title>
        <BooksCarousel />
      </HomeCarousel>
    </View>
  );
};

export default Home;
