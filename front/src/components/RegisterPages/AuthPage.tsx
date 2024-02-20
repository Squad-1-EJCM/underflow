import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { Controller } from "react-hook-form";
import Input from "../Input/Input";
import {
  ButtonsContainer,
  Container,
  Detail,
  LinksContainer,
} from "../../pages/Register/styles";
import Button from "../Button/Button";
import TwoLineAnchor from "../TwoLineAnchor/TwoLineAnchor";
import { useRegisterContext } from "../../contexts/RegisterContext";

const AuthPage = () => {
  const { pagination, control, handleSubmit, errors, watch } =
    useRegisterContext();
  const passwordRef = React.useRef<string>();
  passwordRef.current = watch("password", "");

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

        <ButtonsContainer>
          <Button
            text="Cadastrar"
            onClick={handleSubmit(() => {
              pagination.goNext();
            })}
          />
          <Button
            text="Entrar"
            onClick={() => {}}
            background="#F1F4FF"
            color="#023E8A"
          />
        </ButtonsContainer>
      </AuthForm>
      <LinksContainer>
        <TwoLineAnchor
          firstLine="Não quer criar uma conta no momento?"
          secondLine="Entrar como visitante"
          href="register"
        />
      </LinksContainer>
      <Detail source={require("../../assets/Horizontal-wave.png")} />
    </Container>
  );
};

export default AuthPage;
