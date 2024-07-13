import styled from "styled-components";

export const Info = styled.div``;

export const Content = styled.div``;

type WrapperProps = {
  image: string;
};

export const Header = styled.div`
  display: flex;
  svg {
    font-size: 2rem;
    color: #e50914;
  }
`;

export const CardButton = styled.div`
  display: flex;
  gap: 10px;
  svg {
    font-size: 2rem;
  }
`;

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-image: ${({ image }) =>
    `url(https://image.tmdb.org/t/p/original/${image})`};
  background-position: "center";
  ${Info} {
    position: absolute;
    background: linear-gradient(
      211deg,
      transparent,
      rgba(0, 0, 0, 0.701),
      #000
    );
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    .back {
      position: absolute;
      top: 1rem;
      left: 3rem;
      z-index: 2;
      svg {
        color: #fff;
        font-size: 2rem;
      }
    }
  }

  ${Content} {
    position: absolute;
    left: 3rem;
    bottom: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      font-size: 17px;
      max-width: 650px;
      margin-top: 0;
      margin-bottom: 12px;
      line-height: 24px;
    }

    h1 {
      margin: 20px 0;
    }
  }
`;
