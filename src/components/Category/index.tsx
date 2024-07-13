/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";
import * as S from "./styles";
import { FC, useEffect, useState } from "react";
import { Card } from "../Card";

export type CategoryProps = {
  title: string;
  fetch: any;
};

export const Category: FC<CategoryProps> = (props) => {
  const { title, fetch } = props;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(fetch.data?.results);
  }, [fetch]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8.5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.List>
        <Slider {...settings}>
          {movies?.map((movie, index) => (
            <Card movie={movie} key={index} />
          ))}
        </Slider>
      </S.List>
    </S.Wrapper>
  );
};
