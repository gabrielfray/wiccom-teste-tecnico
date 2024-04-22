import Image from "next/image";
import * as Styled from "./styles";
import WeekFavorites from "../weekFavorites";

const SplitedSection = () => {
  return (
    <Styled.Wrapper>
      <Image
        src="/assets/images/multiCarousel/image2.webp"
        alt="duas mulheres com roupas de carnaval"
        width={574}
        height={402}
      />

      <WeekFavorites
        props={{
          totalSlides: 6,
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 10,
        }}
      />
    </Styled.Wrapper>
  );
};

export default SplitedSection;
