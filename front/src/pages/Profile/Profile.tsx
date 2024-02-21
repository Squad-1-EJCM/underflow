import React from "react";
import { Image, View } from "react-native";
import { Header } from "./styles";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";

const Profile = () => {
  return (
    <View>
      <Header>
        <Image source={require("../../assets/return.svg")} />
        <Image source={require("../../assets/pen-to-square-solid 1.svg")} />
      </Header>
      <ProfilePicture
        image={require("../../assets/profile.svg")}
        size="9.25rem"
      />
    </View>
  );
};

export default Profile;
