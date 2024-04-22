import styled from "styled-components";

export const Wrapper = styled.article`
  width: 277px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  &:hover,
  &:focus-within,
  &:focus-visible,
  &:active,
  &:focus {
    #info-wrapper {
      bottom: 0;
    }
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;

  > img {
    cursor: pointer;
  }
`;

export const ImgPromo = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 6px 12px;
  background-color: var(--pink);
  color: var(--white);
  font-size: 12px;
`;

export const ImgIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  > img {
    cursor: pointer;
  }
`;

export const InfoWrapper = styled.div`
  position: absolute;
  bottom: -97.2px;
  left: 0;
  width: 100%;
  transition: all 0.3s ease;
`;

export const InfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
  row-gap: 8px;

  background-color: var(--black03);
  opacity: 0.8;

  .swiper {
    margin: 0 40px;
    width: calc(100% - 80px);
    background-color: transparent;
    overflow: hidden;
  }

  .swiper-wrapper {
  }
  .swiper-slide {
    background-color: transparent;
  }

  .swiper-button-prev-custom {
    position: absolute;
    left: 10px;
    bottom: 44px;
  }

  .swiper-button-next-custom {
    position: absolute;
    right: 10px;
    bottom: 44px;
    transform: rotate(180deg);
  }

  .swiper-button-disabled {
    opacity: 0.3;
  }
`;

export const InfoTitle = styled.p``;

export const InfoSizes = styled.span<{ selected: 0 | 1 }>`
  font-size: 12px;
  padding: 6px;
  background-color: ${({ selected }) =>
    selected ? "var(--pink)" : "var(--white)"};
  color: ${({ selected }) => (selected ? "var(--white)" : "var(--black)")};
  border: ${({ selected }) =>
    selected ? "1px solid var(--pink)" : "1px solid var(--black03)"};
  cursor: pointer;
`;

export const InfoButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 0;
  color: var(--white);
  background-color: var(--pink);
  width: 100%;
  cursor: pointer;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 4px;
  padding-top: 12px;
`;

export const TextTitle = styled.h3`
  font-size: 12px;
  line-height: 20px;
  margin-bottom: 12px;
`;

export const TextPrice = styled.p`
  vertical-align: middle;
  font-size: 16px;
  line-height: 22px;

  > span {
    font-size: 12px;
    text-decoration: line-through;
    margin-left: 7px;
  }
`;

export const TextInstallments = styled.p`
  font-size: 12px;
`;
