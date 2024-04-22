import Image from "next/image";
import * as Styled from "./styles";
import Link from "next/link";

export const ProductsSectionHighlight = () => {
  return (
    <Styled.Wrapper>
      <Styled.FromTop>
        <Styled.Title>Rasteiras & Birkens</Styled.Title>
        <Styled.Description>
          A categoria de Sandália Rasteira da Sapatella é um verdadeiro paraíso
          para os amantes de conforto e estilo.
        </Styled.Description>

        <Link href="/">
          <Styled.Link>
            Eu quero
            <Image
              src="/assets/icons/arrowRight.svg"
              width={24}
              height={24}
              alt="Seta para direita preta"
            />
          </Styled.Link>
        </Link>

        <Image
          src="/assets/images/highLight/0.webp"
          width={376}
          height={302}
          alt="Foto de pés de uma mulher com rasteiras brancas"
        />
      </Styled.FromTop>

      <Styled.FromBottom>
        <Image
          src="/assets/images/highLight/1.webp"
          width={376}
          height={456}
          alt="Foto de pés de uma mulher com sandália rosa"
        />

        <Link href="/" style={{ position: "absolute", bottom: "-24px" }}>
          <Styled.Link>
            Sandálias
            <Image
              src="/assets/icons/arrowRight.svg"
              width={24}
              height={24}
              alt="Seta para direita preta"
            />
          </Styled.Link>
        </Link>
      </Styled.FromBottom>

      <Styled.FromBottom style={{ alignItems: "center", textAlign: "center" }}>
        <Image
          src="/assets/images/highLight/2.webp"
          width={376}
          height={354}
          alt="Foto de pés de uma mulher com tênis branco"
        />

        <Styled.Title>Tênis</Styled.Title>

        <Styled.Description>
          Os tênis femininos se tornaram um item
          <br /> básico na moda e nos calçados do dia a dia.
        </Styled.Description>

        <Link
          href="/"
          style={{
            position: "absolute",
            bottom: "-24px",
            margin: "0 auto !important",
          }}
        >
          <Styled.Link>
            Conferir
            <Image
              src="/assets/icons/arrowRightFill.svg"
              width={24}
              height={24}
              alt="Seta para direita preta"
            />
          </Styled.Link>
        </Link>
      </Styled.FromBottom>
    </Styled.Wrapper>
  );
};

export default ProductsSectionHighlight;
