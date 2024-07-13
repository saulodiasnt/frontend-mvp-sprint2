import styled from "styled-components";

export const CustomNextArrow = styled.div`
  display: none;
  .slick-next {
    display: block !important;
  }
`;

export const CustomPrevArrow = styled.div`
  display: none;
  .slick-prev {
    display: block !important;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 550px;
  top: 0;
  left: 0;
  z-index: 1;
  margin-top: -5rem;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 13rem;
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7), #000);
    bottom: 0;
    z-index: 1;
  }
  &:hover ${CustomNextArrow}, &:hover ${CustomPrevArrow} {
    display: block; // Mostra as setas no hover
  }
`;
