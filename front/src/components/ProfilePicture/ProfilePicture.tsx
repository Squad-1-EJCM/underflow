import React from "react";
import { ProfilePictureContainer, Image } from "./styles";

const ProfilePicture = ({ image, size }: { image: any; size?: string }) => {
  return (
    <ProfilePictureContainer height={size}>
      <Image source={image} />
    </ProfilePictureContainer>
  );
};

export default ProfilePicture;
