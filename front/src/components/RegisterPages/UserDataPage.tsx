import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { Controller } from "react-hook-form";
import Input from "../Input/Input";
import { ButtonsContainer, Container } from "../../pages/Register/styles";
import Button from "../Button/Button";
import { useRegisterContext } from "../../contexts/RegisterContext";

const UserDataPage = () => {
  const { pagination, control, handleSubmit, errors, watch } =
    useRegisterContext();

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <Container>
      <AuthForm>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Digite seu nome"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="First name"
              error={errors.firstName}
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="firstName"
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
              error={errors.secondName}
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="secondName"
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
              error={errors.CPF}
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
          name="CPF"
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

        <ButtonsContainer>
          <Button text="Avançar" onClick={handleSubmit(onSubmit)} />
          <Button
            text="Voltar"
            onClick={() => pagination.goBack()}
            background="#F1F4FF"
            color="#023E8A"
          />
        </ButtonsContainer>
      </AuthForm>
    </Container>
  );
};

export default UserDataPage;
