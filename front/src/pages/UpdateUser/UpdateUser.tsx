import React from "react";

import { Image, Pressable, View } from "react-native";

import { Header, Container, Form, PictureContainer } from "./styles";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import { Controller, useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../../routes/drawer.routes";
import { useNavigation } from "@react-navigation/native";
import { useUserContext } from "../../contexts/UserContext";

type ProfileScreen = DrawerNavigationProp<RootDrawerParamList, "Profile">;

const UpdateUser = () => {
  const { user } = useUserContext();
  const navigation = useNavigation<ProfileScreen>();

  function onSubmit() {
    console.log("Oi");
    navigation.navigate("Profile");
  }

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user?.email,
      password: "",
      password2: "",
      name: user?.name,
      lastName: user?.lastName,
      cpf: user?.cpf,
      phone: user?.phone,
      CEP: user?.cep,
      state: user?.state,
      city: user?.city,
      neighborhood: user?.neighborhood,
      street: user?.street,
      houseNumber: user?.houseNumber,
      addressSuplement: user?.addressSuplement,
    },
  });

  const passwordRef = React.useRef<string>();
  passwordRef.current = watch("password", "");

  return (
    <Container>
      <Header>
        <Pressable onPress={() => navigation.navigate("Profile")}>
          <Image source={require("../../assets/return.svg")} />
        </Pressable>
      </Header>
      <PictureContainer>
        <ProfilePicture
          image={
            user?.imgUrl
              ? {
                  uri: user.imgUrl,
                }
              : require("../../assets/user.jpg")
          }
          size="9.25rem"
        />
      </PictureContainer>
      <Form>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="email@example.com"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Email"
              error={errors.email}
            />
          )}
          rules={{
            required: "Preencha o campo",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
              message: "Use um email válido",
            },
          }}
          name="email"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="••••••••••••••••••••"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Senha"
              error={errors.password}
              secureTextEntry
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="password"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="••••••••••••••••••••"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Confirmar senha"
              error={errors.password2}
              secureTextEntry
            />
          )}
          rules={{
            required: "Preencha o campo",
            validate: (value) =>
              value === passwordRef.current || "As senhas não coincidem",
          }}
          name="password2"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="00000-000"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="CEP"
              error={errors.CEP}
              mask={{ type: "custom", options: { mask: "99999-999" } }}
            />
          )}
          rules={{
            required: "Preencha o campo",
            pattern: {
              value: /^[0-9]{5}-[0-9]{3}$/,
              message: "Digite um CEP válido",
            },
          }}
          name="CEP"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Digite seu estado"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Estado"
              error={errors.state}
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="state"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Digite sua cidade"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Cidade"
              error={errors.city}
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="city"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Digite seu bairro"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Bairro"
              error={errors.neighborhood}
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="neighborhood"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Digite sua rua"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Rua"
              error={errors.street}
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="street"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="000"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Número"
              error={errors.houseNumber}
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="houseNumber"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder=""
              value={value ? value : ""}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Complemento"
              error={errors.addressSuplement}
            />
          )}
          name="addressSuplement"
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Digite seu nome"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="First name"
              error={errors.name}
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="name"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Digite seu sobrenome"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Sobrenome"
              error={errors.lastName}
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="lastName"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="000.000.000-00"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="CPF"
              mask={{ type: "cpf", options: {} }}
              error={errors.cpf}
            />
          )}
          rules={{
            required: "Preencha o campo",
            pattern: {
              value:
                /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
              message: "Digite um CPF válido",
            },
          }}
          name="cpf"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="(021) 00000-0000"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Phone"
              error={errors.phone}
              mask={{
                type: "cel-phone",
                options: {
                  maskType: "BRL",
                  withDDD: true,
                  dddMask: "(99) ",
                },
              }}
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="phone"
        />
      </Form>

      <Button onClick={handleSubmit(onSubmit)} text="Salvar" />
    </Container>
  );
};

export default UpdateUser;
