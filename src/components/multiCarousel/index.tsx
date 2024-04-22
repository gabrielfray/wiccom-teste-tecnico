import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import * as Styled from "./styles";
import Image from "next/image";
import Link from "next/link";

interface MultiCarouselProps {
  title: string;
  text: string;
  button: string;
  images: {
    src: string;
    alt: string;
  }[];
}

const MultiCarousel = ({ item }: { item: MultiCarouselProps }) => {
  const { title, text, button, images } = item;

  return (
    <Styled.Wrapper>
      <Styled.TextWrapper>
        <div id="swiper-custom-pagination" />

        <Styled.Title>{title}</Styled.Title>
        <Styled.Text>{text}</Styled.Text>
        <Link href="/">
          <Styled.Button>{button}</Styled.Button>
        </Link>
      </Styled.TextWrapper>

      <Swiper
        className="mySwiper"
        navigation={false}
        autoplay={{
          delay: 3000,
          stopOnLastSlide: false,
        }}
        pagination={{
          clickable: true,
          el: "#swiper-custom-pagination",
          renderBullet: (index, className) => {
            return (
              '<span class="' +
              className +
              '">' +
              "<i></i>" +
              "<b></b>" +
              "</span>"
            );
          },
        }}
        loop
        modules={[Autoplay, Pagination]}
        effect="fade"
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <Styled.ImageWrapper>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={574}
                  height={502}
                />
              </Styled.ImageWrapper>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Styled.Wrapper>
  );
};

export default MultiCarousel;
