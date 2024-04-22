import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import * as Styled from "./styles";
import { products } from "./static";
import ProductCard from "../productCard";

interface WeekFavoritesProps {
  title?: string;
  totalSlides: number;
  slidesPerGroup: number;
  slidesPerView: number | "auto";
  spaceBetween?: number;
}

const WeekFavorites = ({ props }: { props: WeekFavoritesProps }) => {
  const { title, totalSlides, slidesPerGroup, slidesPerView, spaceBetween } =
    props;

  return (
    <Styled.Wrapper>
      {title && <Styled.Title>{title}</Styled.Title>}

      <Styled.ProductsWrapper>
        <Swiper
          className="mySwiper"
          navigation={true}
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
          }}
          slidesPerGroup={slidesPerGroup}
          slidesPerView={slidesPerView}
          loop
          nested={true}
          spaceBetween={spaceBetween}
        >
          {Array.from(
            { length: totalSlides },
            (_, index) => products[index % 4]
          ).map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <ProductCard item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Styled.ProductsWrapper>
    </Styled.Wrapper>
  );
};

export default WeekFavorites;
