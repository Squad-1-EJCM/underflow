import React from "react";
import {
  HeaderView,
  IconBook,
  IconMenu,
  PhotoView,
  ProfilePhoto,
} from "./styles";
import { Image } from "react-native";

const HomeHeader = () => {
  return (
    <HeaderView>
      <IconMenu source={require("../../assets/MenuHamburguer.svg")} />
      <IconBook source={require("../../assets/Livrinho.svg")} />
      <PhotoView>
        <ProfilePhoto
          source={{
            uri: "https://images.unsplash.com/photo-1708024587407-73445142b5a8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }}
        />
      </PhotoView>
    </HeaderView>
  );
};

export default HomeHeader;
