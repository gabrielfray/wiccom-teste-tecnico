import Image from "next/image";
import * as Styled from "./styles";
import { paymentItems } from "./static";

const PaymentBanner = () => {
  return (
    <Styled.Wrapper>
      {paymentItems.map((item, index) => (
        <Items key={index} src={item.src} alt={item.alt} text={item.text} />
      ))}
    </Styled.Wrapper>
  );
};

export default PaymentBanner;

interface ItemsProps {
  src: string;
  alt: string;
  text: string;
}

const Items = ({ src, alt, text }: ItemsProps) => {
  return (
    <Styled.Items>
      <Image src={src} alt={alt} width={48} height={48} />

      <Styled.Caption>{text}</Styled.Caption>
    </Styled.Items>
  );
};
