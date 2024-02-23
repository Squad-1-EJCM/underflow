import React from 'react'
import { Title } from "../Home/style";
import PurchaseButtons from '../../components/PurchaseButtons/PurchaseButtons';
import VerticalBookCard from '../../components/VerticalBookCard/VerticalBookCard';
import { FinishPurchaseView, TextView } from './styles';
import BackHeader from '../../components/BackHeader/BackHeader';


const PurchaseCart = () => {
  return (
    <FinishPurchaseView>
      <BackHeader />
      <TextView>
        <Title>Carrinho</Title>
      </TextView>
      <VerticalBookCard />
      <PurchaseButtons/>
    </FinishPurchaseView>
  )
}

export default PurchaseCart
