import React, { useState } from "react";
import { Container, Content, Item, ItemContainer, Title } from "./styles";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleAccordion = (title: string) => {
    setActiveItem(activeItem === title ? null : title);
  };

  return (
    <Container>
      {items.map((item, index) => (
        <ItemContainer key={index}>
          <Item onPress={() => toggleAccordion(item.title)}>
            <Title>{item.title}</Title>
          </Item>
          {activeItem === item.title && <Content>{item.content}</Content>}
        </ItemContainer>
      ))}
    </Container>
  );
};

export default Accordion;
