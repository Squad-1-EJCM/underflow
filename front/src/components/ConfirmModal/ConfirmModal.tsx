import React from 'react'
import { ButtonTextCancel, ButtonTextConfirm, ButtonsView, CancelButton, ConfirmButton, Icon, IconVerifiedView, ModalView, Title } from './styles'

interface ModalInterface{
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfirmModal = ({setIsModalVisible}: ModalInterface) => {
  return (
    <ModalView>
          <IconVerifiedView>
            <Icon source={require("../../assets/greenVerified.svg")} />
          </IconVerifiedView>
          <Title>Deseja prosseguir com essa ação?</Title>
          <ButtonsView>
            <ConfirmButton onPress={() => setIsModalVisible(false)}>
              <ButtonTextConfirm>Confirmar </ButtonTextConfirm>
            </ConfirmButton>
            <CancelButton onPress={() => setIsModalVisible(false)}>
                <ButtonTextCancel>Cancelar</ButtonTextCancel>
            </CancelButton>
          </ButtonsView>
        </ModalView>
  )
}

export default ConfirmModal
