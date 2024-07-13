import styled from "styled-components";

type WrapperProps = {
  image?: string;
};

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 550px;
  background-size: cover;
  background-image: ${({ image }) =>
    `url(https://image.tmdb.org/t/p/original/${image})`};
`;

export const CardButton = styled.div``;

export const Button = styled.button`
  padding: 10px 30px;
  border: none;
  background: #e50914;
  font-family: Montserrat;
  text-transform: capitalize;
  font-size: 16px;
  margin: 5px 7px;
  font-weight: bold;
  transition: 0.2s;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;

  &.btn_2 {
    background: rgb(255, 255, 255);
    color: #e50914;
  }
`;

export const Title = styled.h3``;

export const Review = styled.div``;

export const Info = styled.div`
  padding-left: 5rem;
  padding-top: 12rem;
  background-color: linear-gradient(
    267deg,
    transparent,
    rgba(0, 0, 0, 0.701),
    #000
  );
  width: fit-content;
  height: 80%;

  ${Title} {
    font-size: 35px;
    margin: 5px 0;
  }

  ${Review} {
    display: flex;
    gap: 5px;
  }

  h4 {
    color: #fff;
    margin: 10px;
  }

  p {
    max-width: 700px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .point {
    color: #e50914;
  }
`;
