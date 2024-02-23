import React from "react";
import styled from "styled-components/native";

export const Card = styled.Pressable`
  margin: 10px;
  display: flex;
  width: 185px;
  height: 304px;
  border-radius: 8px;
  background-color: #f1f4ff;
  box-shadow: rgba(0, 0, 0, 0.25) 2px 2px 4px;
  overflow: hidden;
  border: solid 2px #f1f4ff;
`;
export const ImageView = styled.View`
  width: 185px;
  height: 196px;
  background-color: #fff;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;
export const BookImage = styled.Image`
  width: 80%;
  height: 100%;
`;
export const Title = styled.Text`
  color: #33415c;
  font-weight: bold;
`;
export const PriceMajor = styled.Text`
  color: #33415c;
  font-weight: bold;
`;
export const PriceMinor = styled.Text`
  color: #979dac;
  font-weight: bold;
  font-size: 12px;
`;
export const InferiorView = styled.View`
  flex: 1;
  padding: 10px;
`;
export const BottomView = styled.View`
  padding-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
  margin-bottom: 0;
`;
export const LeftView = styled.View`
  align-items: flex-start;
`;
export const IconCart = styled.Image``;
