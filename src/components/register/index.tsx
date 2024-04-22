import Link from "next/link";
import * as Styled from "./styles";

const RegisterSection = () => {
  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.Title>
          Cadastre-se e ganhe <b>R$20 OFF</b> na sua primeira compra!
        </Styled.Title>

        <Styled.Form>
          <Styled.Input type="text" placeholder="Name" />
          <Styled.Input type="email" placeholder="E-mail" />

          <Link href="/">
            <Styled.Button type="submit">Cadastrar</Styled.Button>
          </Link>
        </Styled.Form>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default RegisterSection;
