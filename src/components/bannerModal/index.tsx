import Image from "next/image";
import * as Styled from "./styles";
import Link from "next/link";

const BannerModal = () => {
  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <Styled.Hashtag>#SuperBazar</Styled.Hashtag>
        <Styled.Description>
          até <b>50%OFF</b>
        </Styled.Description>
      </Styled.TitleWrapper>

      <Styled.ImageWrapper>
        <Image
          src="/assets/banners/bannerModal.png"
          alt="Sandálias douradas"
          width={412}
          height={390}
        />
      </Styled.ImageWrapper>

      <Styled.ButtonWrapper>
        <Link href="/">
          <p>Conferir</p>
        </Link>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
};

export default BannerModal;
