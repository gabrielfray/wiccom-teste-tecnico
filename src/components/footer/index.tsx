import Link from "next/link";
import Image from "next/image";

import Logo from "@/components/logo";

import * as Styled from "./styles";
import * as Static from "./static";

const SiteMapComponent = ({
  title,
  links,
}: {
  title: string;
  links: { text: string; link?: string }[];
}) => {
  return (
    <Styled.SiteMap>
      <Styled.SiteMapTitle>{title}</Styled.SiteMapTitle>
      <Styled.SiteMapNav>
        {links.map((item, index) => (
          <Link key={index} href={item.link || "/"}>
            <Styled.SiteMapLink>{item.text}</Styled.SiteMapLink>
          </Link>
        ))}
      </Styled.SiteMapNav>
    </Styled.SiteMap>
  );
};

const InfoComponent = ({
  title,
  images,
}: {
  title: string;
  images: { src: string; alt: string; width?: number; height?: number }[];
}) => {
  return (
    <Styled.Info>
      <Styled.InfoTitle>{title}</Styled.InfoTitle>

      <Styled.InfoImages>
        {images.map((item, index) => (
          <Image
            key={index}
            src={item.src}
            alt={item.alt}
            width={item.width || 34}
            height={item.height || 24}
          />
        ))}
      </Styled.InfoImages>
    </Styled.Info>
  );
};

const Footer = () => {
  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.Social>
          <Logo />
          <Styled.SocialNav>
            {Static.Social.map((item, index) => (
              <Link key={index} href="/">
                <Styled.SocialLink>
                  <Image src={item.src} alt={item.alt} width={24} height={24} />
                </Styled.SocialLink>
              </Link>
            ))}
          </Styled.SocialNav>
        </Styled.Social>

        <Styled.SiteMapWrapper>
          <SiteMapComponent {...Static.AboutUs} />
          <SiteMapComponent {...Static.MyAccount} />
          <SiteMapComponent {...Static.Support} />
        </Styled.SiteMapWrapper>

        <Styled.InfoWrapper>
          <InfoComponent {...Static.PaymentMethods} />
          <InfoComponent {...Static.Security} />
        </Styled.InfoWrapper>
      </Styled.Content>

      <Styled.DevelopedBy>
        <Styled.Texts>
          {Static.DevelopedBy.text.map((txt, idx) => (
            <Styled.Text key={idx}>{txt}</Styled.Text>
          ))}
        </Styled.Texts>

        <Styled.Images>
          {Static.DevelopedBy.images.map((img, idx) => (
            <Image
              key={idx}
              src={img.src}
              alt={img.alt}
              width={img.width || 34}
              height={img.height || 24}
            />
          ))}
        </Styled.Images>
      </Styled.DevelopedBy>
    </Styled.Wrapper>
  );
};

export default Footer;
