import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1280px !important;
  margin: 0 auto !important;
  padding: 2% 0 !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 24px;
  padding-bottom: 50px !important;

  .swiper-pagination-bullets {
    display: flex !important;
    justify-content: center !important;
    column-gap: 8px !important;
    height: 8px !important;
  }
  .swiper-pagination {
    bottom: 0px !important;
  }

  .swiper-pagination-bullet {
    display: block !important;
    height: 8px !important;
    width: 8px !important;
    border-radius: 0 !important;
    background-color: var(--black03) !important;
    transition: all 0.3s ease-in-out !important;
    opacity: 1 !important;
  }

  .swiper-pagination-bullet:not(:last-child) {
    margin-right: 8px !important;
  }

  .swiper-pagination-bullet-active {
    width: 16px !important;
    background-color: var(--pink) !important;
  }
`;

export const Title = styled.h2`
  font-size: 24px !important;
  line-height: 32px !important;
  color: var(--black4F);
  text-align: center;
`;

export const ProductsWrapper = styled.div`
  width: 100%;
  height: 450px !important;
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: var(--white80) !important;
    color: var(--black) !important;
    margin-top: -60px !important;
    display: flex;
    align-items: center;
    justify-content: center;

    &:after {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      line-height: 40px;
      font-size: 24px;
      margin: 0 auto !important;
    }
  }
`;
