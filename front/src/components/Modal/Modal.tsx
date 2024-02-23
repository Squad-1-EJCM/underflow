import React, { Children, useState } from "react";
import { View, Text, Button, Modal as ModalContent } from "react-native";
import { TotalView } from "./styles";

interface ModalInterface extends React.PropsWithChildren {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({
  isModalVisible,
  setIsModalVisible,
  children,
}: ModalInterface) => {
  return (
    <TotalView isModalVisible={isModalVisible}>
      <ModalContent
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        transparent={true}
        presentationStyle="fullScreen"
      >
        {children}
      </ModalContent>
    </TotalView>
  );
};

export default Modal;
