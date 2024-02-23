
import React from "react";
import styled from "styled-components/native";


import "react-native-gesture-handler";
import Register from "./src/pages/Register/Register";
import Routes from "./src/routes/routes";
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
    //<Routes/>
    <>
    <OpenButton onPress={() => setIsModalVisible(true)}>
        <OpenButtonText>ALO</OpenButtonText>
      </OpenButton>
<Modal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
<ConfirmModal setIsModalVisible={setIsModalVisible}/>
</Modal>
    </>
  //<PurchaseCart />
  );
}


