import api from "../api";

interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  cpf: string;
  name: string;
  lastName: string;
  state: string;
  city: string;
  neighborhood: string;
  cep: string;
  street: string;
  houseNumber: string;
  addressSupplement?: string;
  birthday: string;
  phoneNumber: string;
  imgUrl?: string;
}

export default {
  async login(data: LoginData) {
    try {
      const response = api.post("/login", data, {
        withCredentials: true,
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  },
  async register(data: RegisterData) {
    try {
      const response = api.post("/user", data);
      return response;
    } catch (e) {
      console.log(e);
    }
  },
  async getDetails() {
    try {
      const response = api.get("/profile", {
        withCredentials: true,
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  },
};
