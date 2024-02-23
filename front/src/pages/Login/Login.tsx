import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import {
  Anchor,
  ButtonsContainer,
  Container,
  Detail,
  FlexRow,
  LinksContainer,
} from "./styles";
import Button from "../../components/Button/Button";
import TwoLineAnchor from "../../components/TwoLineAnchor/TwoLineAnchor";
import Checkbox from "../../components/Checkbox/Checkbox";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/stack.routes";
import userService, { LoginData } from "../../services/userService.ts";
import { useUserContext } from "../../contexts/UserContext";

type LoginScreen = NativeStackNavigationProp<RootStackParamList, "Register">;

const Login = () => {
  const [remember, setRemember] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigation = useNavigation<LoginScreen>();
  const { user, setUser } = useUserContext();

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    const response = await userService
      .login(data)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((e) => {
        console.log(e);
      });
    // Se a resposta for positiva, o usuário vai para a página home
    if (response?.status === 200) {
      const response = await userService
        .getDetails()
        .then((response) => {
          console.log(response);
          return response;
        })
        .catch((e) => {
          console.log(e);
        });
      if (response?.data) {
        setUser(response.data.user);
        navigation.navigate("Home");
      }
    }
  };

  return (
    <Container>
      <AuthForm>
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
            required: "Email é necessário",
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
            required: "Senha é necessária",
          }}
          name="password"
        />
        <FlexRow>
          <Checkbox
            checked={remember}
            setChecked={setRemember}
            label="Lembrar conta"
          />
          <Anchor>Esqueceu sua senha?</Anchor>
        </FlexRow>
        <ButtonsContainer>
          <Button text="Entrar" onClick={handleSubmit(onSubmit)} />
          <Button
            text="Cadastrar"
            onClick={() => navigation.navigate("Register")}
            background="#F1F4FF"
            color="#023E8A"
          />
        </ButtonsContainer>
      </AuthForm>
      <LinksContainer>
        <TwoLineAnchor
          firstLine="Não quer criar uma conta no momento?"
          secondLine="Entrar como visitante"
          onClick={() => navigation.navigate("Home")}
        />
      </LinksContainer>
      <Detail source={require("../../assets/Horizontal-wave.png")} />
    </Container>
  );
};

export default Login;
