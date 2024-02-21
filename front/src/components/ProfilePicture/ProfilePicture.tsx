import React from "react";
import { ProfilePictureContainer, Image } from "./styles";

const ProfilePicture = ({ image }: { image: any }) => {
  return (
    <ProfilePictureContainer>
      <Image source={image} />
    </ProfilePictureContainer>
  );
};

export default ProfilePicture;
