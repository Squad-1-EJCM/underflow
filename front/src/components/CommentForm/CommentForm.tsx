import React from "react";
import { View } from "react-native";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { Container } from "./styles";

const CommentForm = () => {
  const [comment, setComment] = React.useState("");
  return (
    <Container>
      <Input
        multiline
        numberOfLines={4}
        value={comment}
        onChangeText={(text) => setComment(text)}
        error={undefined}
        placeholder="Comentário"
        marginBottom="1rem"
      />
      <View>
        <Button text="Comentar" onClick={() => {}} />
      </View>
    </Container>
  );
};

export default CommentForm;
