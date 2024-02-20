import React from "react";
import usePagination from "../hooks/usePagination";
import {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormWatch,
  useForm,
} from "react-hook-form";

const RegisterContext = React.createContext<IRegisterContext | null>(null);

export interface RegisterDataInterface {
  email: string;
  password: string;
  password2: string;
  firstName: string;
  secondName: string;
  CPF: string;
  phone: string;
}

interface PaginationInterface {
  page: number;
  goBack: VoidFunction;
  goNext: VoidFunction;
  goTo: (page: number) => void;
}

interface IRegisterContext {
  pagination: PaginationInterface;
  control: Control<
    {
      email: string;
      password: string;
      password2: string;
      firstName: string;
      secondName: string;
      CPF: string;
      phone: string;
      CEP: string;
      UF: string;
      bairro: string;
      number: string;
      aditionalInformation: string;
    },
    any,
    {
      email: string;
      password: string;
      password2: string;
      firstName: string;
      secondName: string;
      CPF: string;
      phone: string;
      CEP: string;
      UF: string;
      bairro: string;
      number: string;
      aditionalInformation: string;
    }
  >;
  handleSubmit: UseFormHandleSubmit<
    {
      email: string;
      password: string;
      password2: string;
    },
    {
      email: string;
      password: string;
      password2: string;
    }
  >;
  errors: FieldErrors<{
    email: string;
    password: string;
    password2: string;
    firstName: string;
    secondName: string;
    CPF: string;
    phone: string;
    CEP: string;
    UF: string;
    bairro: string;
    number: string;
    aditionalInformation: string;
  }>;
  watch: UseFormWatch<{
    email: string;
    password: string;
    password2: string;
    firstName: string;
    secondName: string;
    CPF: string;
    phone: string;
    CEP: string;
    UF: string;
    bairro: string;
    number: string;
    aditionalInformation: string;
  }>;
}

export function useRegisterContext() {
  const context = React.useContext(RegisterContext);
  if (!context) throw new Error("useContext must be inside provider");
  else return context;
}

const RegisterContextProvider = ({ children }: React.PropsWithChildren) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      password2: "",
      firstName: "",
      secondName: "",
      CPF: "",
      phone: "",
      CEP: "",
      UF: "",
      bairro: "",
      number: "",
      aditionalInformation: "",
    },
  });

  const pagination = usePagination(3);

  return (
    <RegisterContext.Provider
      value={{ pagination, control, handleSubmit, errors, watch }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContextProvider;
