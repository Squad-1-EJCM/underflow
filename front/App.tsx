import React from "react";
import Routes from "./src/routes/index";
import UserContextProvider from "./src/contexts/UserContext";
import styled from "styled-components/native";
import "react-native-gesture-handler";
import Register from "./src/pages/Register/Register";
import RegisterContextProvider from "./src/contexts/RegisterContext";
import SuccessPage from "./src/components/SuccessPage/SuccessPage";
import Product from "./src/pages/Product/Product";
import AddProduct from "./src/pages/AddProduct/AddProduct";
import FinishScreen from "./src/pages/FinishScreen/FinishScreen";
import { View } from "react-native";
import FinishPurchase from "./src/pages/FinishPurchase/FinishPurchase";
import PurchaseButtons from "./src/components/PurchaseButtons/PurchaseButtons";
import PurchaseCart from "./src/pages/PurchaseCart/PurchaseCart";
import ModalConfirmation from "./src/components/Modal/Modal";
import { ButtonTextCancel,
  ButtonTextConfirm,
  ButtonsView,
  CancelButton,
  ConfirmButton,
  Icon,
  IconVerifiedView,
  ModalView,
  OpenButton,
  OpenButtonText,
  Title,
  TotalView, } from "./src/components/Modal/styles";
import { useState } from "react";
import Modal from "./src/components/Modal/Modal";
import ConfirmModal from "./src/components/ConfirmModal/ConfirmModal";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>

  );

}
