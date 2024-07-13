import styled from "styled-components";

export const Title = styled.h3`
  font-size: 23px;
  margin: 10px 0 10px 1.9rem;
  text-transform: uppercase;
`;

export const List = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 20px 40px;
`;

export const Wrapper = styled.div`
  margin-top: 1rem;
  position: relative;
  padding: 2rem 0;
  padding-left: 1rem;
  z-index: 1;
`;

type CardProps = {
  image: string;
};

export const Card = styled.div<CardProps>`
  flex: 0 0 auto;
  margin-right: 16px;
  width: 200px;
  height: 300px;
  background-color: #ccc;
  border-radius: 8px;

  background-image: ${({ image }) =>
    `url(https://image.tmdb.org/t/p/original${image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    z-index: 10;
  }
`;
