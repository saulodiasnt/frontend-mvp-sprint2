/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";

import { CardBanner } from "../CardBanner";

import * as S from "./styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FC, useEffect, useState } from "react";
import { IMovie } from "../../types/entities/movies";

export type BannerProps = {
  fetch: any;
};

export const Banner: FC<BannerProps> = (props) => {
  const { fetch } = props;

  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    setMovies(fetch.data?.results as IMovie[]);
  }, [fetch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <S.CustomNextArrow />,
    prevArrow: <S.CustomPrevArrow />,
  };

  return (
    <S.Wrapper>
      <Slider {...settings}>
        {movies?.map((movie, index) => (
          <CardBanner
            key={index}
            {...movie}
            title={movie.title || movie.original_title || movie.name}
          />
        ))}
      </Slider>
    </S.Wrapper>
  );
};
