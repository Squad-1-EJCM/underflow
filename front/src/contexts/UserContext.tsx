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

const RegisterContext = React.createContext<IUserContext | null>(null);

export interface User {
  id: string;
  email: string;
  password: string;
  password2: string;
  name: string;
  lastName: string;
  birthday: string;
  cpf: string;
  phone: string;
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  houseNumber: string;
  addressSuplement: string;
  favoritedBooks: Book[];
  publishedBooks: Book[];
  imgUrl?: string;
}

interface Book {
  id: number;
  title: string;
  price: string;
  discount?: string;
  imgUrl: string;
}

interface IUserContext {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export function useUserContext() {
  const context = React.useContext(RegisterContext);
  if (!context) throw new Error("useContext must be inside provider");
  else return context;
}

const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = React.useState<User | null>(null);

  return (
    <RegisterContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export default UserContextProvider;
