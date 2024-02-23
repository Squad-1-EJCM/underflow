import React from "react";
import { View } from "react-native";
import {
  AddProductView,
  AddImage,
  BoxImageView,
  BoxTitle,
  BoxView,
  HeaderView,
  Icon,
  Title,
  InputView,
} from "./styles";
import Input from "../../components/Input/Input";
import { Controller, useForm } from "react-hook-form";
import { ButtonsContainer } from "../Login/styles";
import Button from "../../components/Button/Button";

const AddProduct = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      author: "",
      edition: "",
      integrity: "",
      binding: "",
      language: "",
      price: "",
      discount: "",
    },
  });

  return (
    <AddProductView>
      <HeaderView>
        <Icon source={require("../../assets/voltar.svg")} />
        <Title>Adicionar produto</Title>
      </HeaderView>
      <BoxImageView>
        <BoxView>
          <AddImage source={require("../../assets/adicionarImg.svg")} />
          <BoxTitle>Adicionar imagem</BoxTitle>
        </BoxView>
      </BoxImageView>
      <InputView>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Digite o nome do livro"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Título"
              error={errors.title}
            />
          )}
          rules={{
            required: "Título do livro é necessário",
          }}
          name="title"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              style={{
                height: 136,
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
              placeholder="Descreva o seu livro"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Descrição"
              error={errors.description}
            />
          )}
          rules={{
            required:
              "Faça uma breve descrição, pode ajudar a vender o seu livro!",
          }}
          name="description"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Nome do autor"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Autor"
              error={errors.author}
            />
          )}
          rules={{
            required: "Escreva o nome do autor.",
          }}
          name="author"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="1ª edição, 2ª edição..."
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Edição"
              error={errors.edition}
            />
          )}
          rules={{
            required: "Digite sua edição.",
          }}
          name="edition"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Novo, seminovo, desgastado, etc..."
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Integridade"
              error={errors.integrity}
            />
          )}
          rules={{
            required: "Digite as condições do seu livro.",
          }}
          name="integrity"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Brochura, capa dura, espiral, etc..."
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Encadernamento"
              error={errors.binding}
            />
          )}
          rules={{
            required: "Digite o encadernamento do seu livro.",
          }}
          name="binding"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Português, ingles, etc..."
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Idioma"
              error={errors.language}
            />
          )}
          rules={{
            required: "Digite a linguagem do seu livro",
          }}
          name="language"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Ex: 64.90"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Preço"
              error={errors.price}
            />
          )}
          rules={{
            required: "Digite o preço do seu livro",
          }}
          name="price"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Ex: 10 (equivale a 10% de desconto)"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Desconto"
              error={errors.discount}
            />
          )}
          rules={{
            required: "Digite o desconto do seu livro",
          }}
          name="discount"
        />
      </InputView>
      <ButtonsContainer
        style={{ paddingBottom: 24, paddingRight: 16, marginTop: 8 }}
      >
        <Button text="Adicionar produto" onClick={() => {}} />
      </ButtonsContainer>
    </AddProductView>
  );
};
