import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import * as Styled from "./styles";
import { NavigationOptions } from "swiper/types";
import useStoreContext from "@/context";

interface ProductCardProps {
  imgSrc: string;
  imgAlt: string;
  discount?: number;
  sizes: number[];
  title: string;
  price: string;
  priceColor?: string;
  oldPrice: string;
  installments: string;
}

const ProductCard = ({ item }: { item: ProductCardProps }) => {
  const {
    imgSrc,
    imgAlt,
    discount,
    sizes,
    title,
    price,
    priceColor,
    oldPrice,
    installments,
  } = item;

  const [like, setLike] = useState(false);
  const [bag, setBag] = useState(false);

  const [sizeSelected, setSizeSelected] = useState<number | undefined>(
    undefined
  );

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const { updateLikes, updateBag } = useStoreContext();

  return (
    <Styled.Wrapper>
      <Styled.ImgWrapper>
        <Image src={imgSrc} alt={imgAlt} width={277} height={277} priority />

        {discount && <Styled.ImgPromo>{discount}% OFF</Styled.ImgPromo>}

        <Styled.ImgIcon>
          <Image
            src={
              like
                ? "/assets/icons/heartFullPink.svg"
                : "/assets/icons/heartLineBlack.svg"
            }
            alt="Heart icon"
            width={24}
            height={24}
            onClick={() => {
              like ? updateLikes(-1) : updateLikes(1);
              setLike(!like);
            }}
          />
        </Styled.ImgIcon>

        <Styled.InfoWrapper id="info-wrapper">
          <Styled.InfoTextWrapper id="swiper-button-custom">
            <Styled.InfoTitle>Selecione um tamanho</Styled.InfoTitle>
            <Swiper
              className="mySwiper"
              navigation={{
                enabled: true,
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              modules={[Navigation]}
              slidesPerView={5}
              nested={true}
              spaceBetween={1}
              allowTouchMove={false}
              onSwiper={(swiper) => {
                // Delay execution for the refs to be defined
                setTimeout(() => {
                  if (swiper?.params?.navigation) {
                    const navigationOptions = swiper.params
                      .navigation as NavigationOptions;
                    navigationOptions.prevEl = navigationPrevRef.current;
                    navigationOptions.nextEl = navigationNextRef.current;

                    // Re-init navigation
                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }
                });
              }}
            >
              {sizes.map((size, index) => (
                <SwiperSlide key={index} onClick={() => setSizeSelected(index)}>
                  <Styled.InfoSizes
                    selected={
                      sizeSelected !== undefined && sizeSelected === index
                        ? 1
                        : 0
                    }
                  >
                    {size}
                  </Styled.InfoSizes>
                </SwiperSlide>
              ))}
            </Swiper>
            <div ref={navigationPrevRef} className="swiper-button-prev-custom">
              <Image
                src="/assets/icons/chevron.svg"
                alt="Next button"
                width={24}
                height={24}
              />
            </div>
            <div
              ref={navigationNextRef}
              className="swiper-button-next-custom"
              onClick={(e) => console.log(e)}
            >
              <Image
                src="/assets/icons/chevron.svg"
                alt="Previous button"
                width={24}
                height={24}
              />
            </div>
          </Styled.InfoTextWrapper>
          <Styled.InfoButton
            onClick={() => {
              bag ? updateBag(-1) : updateBag(1);
              setBag(!bag);
            }}
          >
            Adicionar à sacola
          </Styled.InfoButton>
        </Styled.InfoWrapper>
      </Styled.ImgWrapper>

      <Styled.TextWrapper>
        <Styled.TextTitle>{title}</Styled.TextTitle>
        <Styled.TextPrice style={{ color: priceColor || "var(--black)" }}>
          R$ {price}
          <span>R$ {oldPrice}</span>
        </Styled.TextPrice>
        <Styled.TextInstallments>{installments}</Styled.TextInstallments>
      </Styled.TextWrapper>
    </Styled.Wrapper>
  );
};

export default ProductCard;
