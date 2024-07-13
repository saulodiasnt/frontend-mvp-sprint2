/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from "react";
import { IMovie } from "../../types/entities/movies";
import { getImageUrl } from "../../utils/helpers/get-image-url.helper";

import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export type CardProps = {
  movie: IMovie;
  type?: "movie" | "tv";
};

export const Card: FC<CardProps> = (props) => {
  const { movie } = props;
  const [dragStart, setDragStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: any) => {
    setDragStart(e.clientX);
    setIsDragging(false);
  };

  const handleMouseMove = (e: any) => {
    if (Math.abs(e.clientX - dragStart) > 10) {
      setIsDragging(true);
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) {
      navigate(`/details/${movie.media_type || "movie"}/${movie.id}`);
    }

    setIsDragging(false);
    setDragStart(0);
  };

  const handleClick = (e: any) => {
    if (isDragging) {
      e.preventDefault();
    }
  };

  const navigate = useNavigate();

  return (
    <S.Link
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
    >
      <img src={getImageUrl(movie)} alt={movie.title} />
    </S.Link>
  );
};
