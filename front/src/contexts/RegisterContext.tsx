import React from "react";
import usePagination from "../hooks/usePagination";
import {
  Control,
  FieldErrors,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormSetValue,
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
      name: string;
      lastName: string;
      cpf: string;
      phone: string;
      CEP: string;
      state: string;
      city: string;
      neighborhood: string;
      street: string;
      houseNumber: string;
      addressSuplement: string;
    },
    any,
    {
      email: string;
      password: string;
      password2: string;
      name: string;
      lastName: string;
      cpf: string;
      phone: string;
      CEP: string;
      state: string;
      city: string;
      neighborhood: string;
      street: string;
      houseNumber: string;
      addressSuplement: string;
    }
  >;
  handleSubmit: UseFormHandleSubmit<
    {
      email: string;
      password: string;
      password2: string;
      name: string;
      lastName: string;
      cpf: string;
      phone: string;
      CEP: string;
      state: string;
      city: string;
      neighborhood: string;
      street: string;
      houseNumber: string;
      addressSuplement: string;
    },
    {
      email: string;
      password: string;
      password2: string;
      name: string;
      lastName: string;
      cpf: string;
      phone: string;
      CEP: string;
      state: string;
      city: string;
      neighborhood: string;
      street: string;
      houseNumber: string;
      addressSuplement: string;
    }
  >;
  errors: FieldErrors<{
    email: string;
    password: string;
    password2: string;
    name: string;
    lastName: string;
    cpf: string;
    phone: string;
    CEP: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    houseNumber: string;
    addressSuplement: string;
  }>;
  watch: UseFormWatch<{
    email: string;
    password: string;
    password2: string;
    name: string;
    lastName: string;
    cpf: string;
    phone: string;
    CEP: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    houseNumber: string;
    addressSuplement: string;
  }>;
  setValue: UseFormSetValue<{
    email: string;
    password: string;
    password2: string;
    name: string;
    lastName: string;
    cpf: string;
    phone: string;
    CEP: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    houseNumber: string;
    addressSuplement: string;
  }>;
  getValues: UseFormGetValues<{
    email: string;
    password: string;
    password2: string;
    name: string;
    lastName: string;
    cpf: string;
    phone: string;
    CEP: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    houseNumber: string;
    addressSuplement: string;
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
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      password2: "",
      name: "",
      lastName: "",
      cpf: "",
      phone: "",
      CEP: "",
      state: "",
      city: "",
      neighborhood: "",
      street: "",
      houseNumber: "",
      addressSuplement: "",
    },
  });

  const pagination = usePagination(4);

  return (
    <RegisterContext.Provider
      value={{
        pagination,
        control,
        handleSubmit,
        errors,
        watch,
        setValue,
        getValues,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContextProvider;
