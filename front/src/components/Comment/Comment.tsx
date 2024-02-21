import React from "react";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import { CommentHeader, Container, Paragraph, PublisherName } from "./styles";
import { View } from "react-native";

const Comment = ({ name, comment }: { name: string; comment: string }) => {
  return (
    <Container>
      <CommentHeader>
        <ProfilePicture image={require("../../assets/profile-picture.png")} />
        <PublisherName>{name}</PublisherName>
      </CommentHeader>
      <Paragraph>{comment}</Paragraph>
    </Container>
  );
};

export default Comment;
