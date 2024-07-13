/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";

import * as S from "./styles";
import { useContext, useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useGetByIdQuery } from "../../utils/services/tmdb-api.service";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import LanguageIcon from "@mui/icons-material/Language";
import { ApiContext, ApiContextProps } from "../../utils/contexts/Api";
import { AuthContext } from "../../utils/contexts/Auth";
import { MyMovie } from "../List";

export const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { api } = useContext(ApiContext) as ApiContextProps;
  const { isLogged } = useContext(AuthContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteMovie, setFavoriteMovie] = useState<MyMovie>();

  const getFavoriteMovie = async () => {
    const movies = await api.get<MyMovie[]>("/favorite-movies");
    const isFavorite = movies.data.find(
      (movie) => movie.tmdb_id == Number(params?.id || 0)
    );

    setFavoriteMovie(isFavorite);

    setIsFavorite(!!isFavorite);
  };

  useEffect(() => {
    if (isLogged) {
      getFavoriteMovie();
    }
  }, [params.id]);

  const handleFavorite = async () => {
    if (isFavorite) {
      await api.delete(`/favorite-movies/${favoriteMovie?.id}`);
    } else {
      await api.post("/favorite-movies", {
        tmdb_id: params.id,
        title: data?.title || data?.original_title || data?.original_name,
        backdrop_path: data?.backdrop_path,
        poster_path: data?.poster_path,
        media_type: data?.media_type,
      });
    }

    getFavoriteMovie();
  };

  const { data } = useGetByIdQuery(params);

  return (
    <S.Wrapper image={data?.backdrop_path}>
      <S.Info>
        <div className="back" onClick={() => navigate(-1)}>
          <IconButton>
            <KeyboardBackspaceIcon />
          </IconButton>
        </div>

        <S.Content>
          <S.Header>
            <h1>
              {data?.title || data?.original_title || data?.original_name}
            </h1>
            <IconButton onClick={handleFavorite}>
              {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </S.Header>
          <p>{data?.overview}</p>
          <S.CardButton>
            <IconButton color="error" size="large">
              <PlayCircleIcon />
            </IconButton>
            <IconButton color="info" size="large">
              <LanguageIcon />
            </IconButton>
          </S.CardButton>
        </S.Content>
      </S.Info>
    </S.Wrapper>
  );
};
