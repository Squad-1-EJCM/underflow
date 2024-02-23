
import React from "react";
import styled from "styled-components/native";


import "react-native-gesture-handler";
import Register from "./src/pages/Register/Register";
import Routes from "./src/routes/routes";
import { View } from "react-native";
import FinishPurchase from "./src/pages/FinishPurchase/FinishPurchase";
import PurchaseButtons from "./src/components/PurchaseButtons/PurchaseButtons";
import PurchaseCart from "./src/pages/PurchaseCart/PurchaseCart";
import RegisterContextProvider from "./src/contexts/RegisterContext";
import SuccessPage from "./src/components/SuccessPage/SuccessPage";
import Product from "./src/pages/Product/Product";
import Profile from "./src/pages/Profile/Profile";
import UpdateUser from "./src/pages/UpdateUser/UpdateUser";

export default function App() {
  return (
    <Container>
      <Routes />
      {/* <RegisterContextProvider>
        <Register />
      </RegisterContextProvider> */}
      {/* <Product /> */}

  );
}


