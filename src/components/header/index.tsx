import Image from "next/image";
import Link from "next/link";
import Input from "../input";
import * as Styled from "./styles";
import Logo from "@/components/logo";
import useStoreContext from "@/context";

const Header = () => {
  const { likes, bag } = useStoreContext();

  return (
    <Styled.Header>
      <Logo />
      <Styled.NavProducts>
        <Link href="/">Novidades</Link>
        <Link href="/">Sapatos</Link>
        <Link href="/">Sandálias</Link>
        <Link href="/">Tênis</Link>
        <Link href="/">Bolsas & Acessórios</Link>
        <Link href="/">OFF</Link>
      </Styled.NavProducts>
      <Input
        icon={{
          src: "/assets/icons/search.svg",
          alt: "ícone de uma lupa",
        }}
        type="search"
        name="BuscarProdutos"
      />
      <Styled.NavIcons>
        <Image
          src="/assets/icons/user.svg"
          alt="aaaaaaa"
          width={24}
          height={24}
          quality={50}
        />
        <div>
          <Image
            src="/assets/icons/heart.svg"
            alt="aaaaaaa"
            width={24}
            height={24}
            quality={50}
            style={{ width: 24, height: 24 }}
          />
          {likes > 0 && <span className="countStore">{likes}</span>}
        </div>
        <div>
          <Image
            src="/assets/icons/shopping-cart.svg"
            alt="aaaaaaa"
            width={24}
            height={24}
            quality={50}
          />
          {bag > 0 && <span className="countStore">{bag}</span>}
        </div>
      </Styled.NavIcons>
    </Styled.Header>
  );
};

export default Header;
