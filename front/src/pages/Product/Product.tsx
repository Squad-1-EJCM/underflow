import axios from "axios";
import React from "react";
import {
  Container,
  Content,
  Cover,
  GhostText,
  GridBox,
  ImageContainer,
  ImgBg,
  InformationContainer,
  InformationTitle,
  OldPrice,
  SpacingContainer,
  Price,
  PriceFlexBox,
  PublisherData,
  PublisherFlexBox,
  PublisherName,
  Report,
  SimpleText,
  Star,
  StrongText,
  Title,
  Underline,
  Underlined,
  Separator,
} from "./styles";
import getPublishedTime from "../../utils/getPublishedTime";
import formatPrice from "../../utils/formatPrice";
import Button from "../../components/Button/Button";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import InformationKeyValueItem from "../../components/InformationKeyValueItem/InformationKeyValueItem";
import CommentForm from "../../components/CommentForm/CommentForm";
import Comment from "../../components/Comment/Comment";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootDrawerParamList } from "../../routes/drawer.routes";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { View } from "react-native";

interface Comentario {
  usuario: string;
  comentario: string;
}

interface Produto {
  title: string;
  id: number;
  imagem_url: string;
  autor: string;
  edicao: string;
  data_publicacao: string;
  preco: number;
  desconto: number | null;
  tipo_encadernacao: string;
  integridade: string;
  publicador: string;
  genero: string;
  idioma: string;
  descricao: string;
  comentarios: Comentario[];
}

type ProductScreen = DrawerNavigationProp<RootDrawerParamList, "Product">;

const Product = () => {
  const id = 1;
  const [data, setData] = React.useState<Produto | null>(null);

  const navigation = useNavigation<ProductScreen>();

  React.useEffect(() => {
    async function requestData() {
      const request = await axios.get("mocks/products.json");
      const data = request.data.produtos as Produto[];
      const { status } = request;
      if (status === 200 && data) {
        console.log(data);
        const product = data.filter((item) => item.id === id)[0];
        if (product) setData(product);
      }
    }
    requestData();
  }, [id]);

  if (data)
    return (
      <Container>
        <ImageContainer>
          <ImgBg source={{ uri: data.imagem_url }}></ImgBg>
          <Cover source={{ uri: data.imagem_url }} />
        </ImageContainer>

        <Content>
          <Title>{data.title}</Title>
          <GridBox>
            <SimpleText>{data.autor}</SimpleText>
            <SimpleText>{data.edicao}</SimpleText>
            <Star source={require("../../assets/star.svg")} />
          </GridBox>
          <GhostText>{`${getPublishedTime(
            new Date(data.data_publicacao)
          )}`}</GhostText>
          <PriceFlexBox>
            <Price>
              {data.desconto
                ? formatPrice(data.preco * (data.desconto / 10))
                : formatPrice(data.preco)}
            </Price>
            <OldPrice>
              De{" "}
              <Underlined>
                {formatPrice(data.preco)}
                <Underline />
              </Underlined>
            </OldPrice>
          </PriceFlexBox>
          <StrongText>Encadernação: {data.tipo_encadernacao}</StrongText>
          <StrongText>Integridade: {data.integridade}</StrongText>
          <PublisherFlexBox>
            <PublisherData>
              <SimpleText>Vendedor:</SimpleText>
              <SpacingContainer margin="0 0.5rem 0 1.5rem">
                <ProfilePicture
                  image={require("../../assets/profile-picture.png")}
                />
              </SpacingContainer>
              <PublisherName>{data.publicador}</PublisherName>
            </PublisherData>
            <Report>Denunciar</Report>
          </PublisherFlexBox>
          <Button
            text="Adicionar ao carrinho"
            onClick={() => {
              navigation.navigate("Cart");
            }}
          />
          <InformationTitle>Informações</InformationTitle>
          <InformationContainer>
            <InformationKeyValueItem title="Livro" value={data.title} />
            <InformationKeyValueItem title="Autor" value={data.autor} />
            <InformationKeyValueItem title="Gênero" value={data.genero} />
            <InformationKeyValueItem title="Edição" value={data.edicao} />
            <InformationKeyValueItem
              title="Encadernamento"
              value={data.tipo_encadernacao}
            />
            <InformationKeyValueItem
              title="Integridade"
              value={data.integridade}
            />
            <InformationKeyValueItem title="Idioma" value={data.idioma} />
            <InformationKeyValueItem title="Descrição" value={data.descricao} />
          </InformationContainer>
          <SpacingContainer margin="3.5rem 0 1rem">
            <Title>Comentários</Title>
          </SpacingContainer>
          <CommentForm />
          <SpacingContainer margin="2.5rem 0">
            {data.comentarios.map((comment, index) => {
              return (
                <View key={index}>
                  <Comment
                    name={comment.usuario}
                    comment={comment.comentario}
                  />
                  {index + 1 < data?.comentarios.length ? <Separator /> : null}
                </View>
              );
            })}
          </SpacingContainer>
        </Content>
      </Container>
    );
  else return null;
};

export default Product;
