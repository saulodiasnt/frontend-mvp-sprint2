import { FC } from "react";
import * as S from "./styles";
import { getYear } from "date-fns";
import { useNavigate } from "react-router-dom";

export type CardBannerProps = {
  title?: string;
  release_date: string;
  overview: string;
  backdrop_path: string;
  vote_average: number;
  id: number;
  media_type?: string;
};

export const CardBanner: FC<CardBannerProps> = (props) => {
  const {
    title,
    vote_average,
    release_date,
    overview,
    backdrop_path,
    id,
    media_type,
  } = props;

  const navigate = useNavigate();

  return (
    <S.Wrapper image={backdrop_path}>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Review>
          <h4 className="point">{vote_average}% Points</h4>
          {release_date && <h4>{getYear(release_date)}</h4>}
        </S.Review>
        <S.CardButton>
          <S.Button
            onClick={() => navigate(`/details/${media_type || "movie"}/${id}`)}
          >
            Play
          </S.Button>
          <S.Button className="btn_2">My List</S.Button>
        </S.CardButton>

        <p>{overview}</p>
      </S.Info>
    </S.Wrapper>
  );
};
