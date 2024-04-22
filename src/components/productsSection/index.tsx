import Image from "next/image";
import * as Styled from "./styles";
import { productItems } from "./static";
import React from "react";
import Link from "next/link";

const ProductsSections = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>Compre por categoria</Styled.Title>

      <Styled.Sections>
        {productItems.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </Styled.Sections>
    </Styled.Wrapper>
  );
};

export default ProductsSections;

interface ItemsProps {
  item: {
    src: string;
    alt: string;
    text: string;
  };
}

const Item = (props: ItemsProps) => {
  const { src, alt, text } = props.item;
  return (
    <Link href="/">
      <Styled.Section>
        <Image src={src} alt={alt} width={162} height={162} />
        <Styled.Caption>{text}</Styled.Caption>
      </Styled.Section>
    </Link>
  );
};
