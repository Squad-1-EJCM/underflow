import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { Controller } from "react-hook-form";
import Input from "../Input/Input";
import { ButtonsContainer, Container } from "../../pages/Register/styles";
import Button from "../Button/Button";
import { useRegisterContext } from "../../contexts/RegisterContext";

const AddressPage = () => {
  const { pagination, control, handleSubmit, errors, watch } =
    useRegisterContext();

  return (
    <Container>
      <AuthForm>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="00000-00"
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
              placeholder="Digite seu bairro"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Estado"
              error={errors.UF}
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="UF"
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
              error={errors.number}
            />
          )}
          rules={{
            required: "Preencha o campo",
          }}
          name="number"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder=""
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Complemento"
              error={errors.aditionalInformation}
            />
          )}
          name="aditionalInformation"
        />

        <ButtonsContainer>
          <Button
            text="Avançar"
            onClick={handleSubmit(() => pagination.goNext())}
          />
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

export default AddressPage;
