import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7792366946778712) 0%,
    rgba(0, 0, 0, 0.10696778711484589) 46%,
    rgba(255, 255, 255, 0) 100%
  );
  position: fixed;
  width: 100%;
  height: clamp(72px, 10%, 72px);
  z-index: 1000;
  transition: all 0.2s ease-in-out;

  > label {
    width: 100%;
  }

  &:hover {
    background: var(--white);

    > a,
    > div > a,
    > nav > a,
    > a > img {
      color: var(--black) !important;
    }

    > nav:nth-child(2) > a:last-child {
      color: var(--pink) !important;
    }

    > a > img,
    > div > a > img,
    > label > img,
    img,
    > nav:nth-child(4) > img {
      filter: invert(1);
    }

    > label > input::-webkit-input-placeholder {
      color: var(--grey) !important;
    }
  }

  > div:first-child {
    margin: 0 4%;
  }

  > nav:nth-child(2) {
    display: flex;
    gap: 2%;
    width: clamp(40%, 100%, 540px);
    white-space: nowrap;
    > a {
      font-size: 16px !important;
      color: var(--white);
    }
  }
`;

export const NavProducts = styled.nav`
  display: flex;
  gap: 2%;
  width: clamp(40%, 100%, 540px);
  white-space: nowrap;

  > a {
    cursor: pointer;
  }
`;

export const NavIcons = styled.nav`
  display: flex;
  gap: 24px;

  > div {
    position: relative;
  }
  img {
    cursor: pointer;
  }

  .countStore {
    position: absolute;
    right: -6px;
    top: -4px;
    background-color: var(--pink) !important;
    font-size: 10px !important;
    line-height: 12px !important;
    width: 14px !important;
    height: 14px !important;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px !important;
    color: var(--white) !important;
  }
`;
