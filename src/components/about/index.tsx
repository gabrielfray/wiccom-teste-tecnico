import Image from "next/image";
import * as Styled from "./styles";

const About = () => {
  return (
    <Styled.Wrapper>
      <Styled.TextWrapper>
        <Styled.Title>Sobre a Sapatella</Styled.Title>
        <Styled.Description>
          Oi, a gente já se conhece? Muito prazer, Sapatella! Somos uma Marca de
          moda que oferece sapatos e acessórios feitos para te encantar. Aqui
          tem atenção de verdade, produtos com o seu jeito e ritmo. Chega mais,
          fique à vontade. Queremos ver você confortável e livre para ser como
          quiser e ocupar o espaço que bem entender. O que nos une e contagia é
          a vontade de brilhar e ser feliz. Mais que mulheres, somos amigas.
          Sapatella. Vamos juntas?
        </Styled.Description>
      </Styled.TextWrapper>

      <Styled.ImageWrapper>
        <Image
          src="/assets/images/girlInGrandstand.png"
          alt="mulher sentada em uma arquibancada de um estádio"
          width={376}
          height={320}
        />
      </Styled.ImageWrapper>
    </Styled.Wrapper>
  );
};

export default About;
