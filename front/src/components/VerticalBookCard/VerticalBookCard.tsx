import React from "react";
import {
  LeftView,
  RightView,
  VerticalCard,
  BookImage,
  TopView,
  Title,
  BottomView,
  BottomLeftView,
  Value,
  Price,
  TrashCan,
} from "./styles";

const VerticalBookCard = () => {
  return (
    <VerticalCard>
      <LeftView>
        <BookImage source={require("../../assets/Harry.svg")} />
      </LeftView>
      <RightView>
        <TopView>
          <Title numberOfLines={2} ellipsizeMode="tail">
            Livro Primeira Edição Britânica Harry 
            Potter e o Príncipe Meio Sangue
          </Title>
        </TopView>
        <BottomView>
          <BottomLeftView>
            <Value>Valor:</Value>
            <Price>R$ 196.90</Price>
          </BottomLeftView>
          <TrashCan source={require("../../assets/lixeira.svg")} />
        </BottomView>
      </RightView>
    </VerticalCard>
  );
};

export default VerticalBookCard;
