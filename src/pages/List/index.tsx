import { useContext, useEffect, useState } from "react";
import { Nav } from "../../components/Nav";
import * as S from "./styles";
import { ApiContext, ApiContextProps } from "../../utils/contexts/Api";
import { useNavigate } from "react-router-dom";

export type MyMovie = {
  id: number;
  title: string;
  backdrop_path: string;
  tmdb_id: number;
  media_type: string;
  poster_path: string;
};

export const List = () => {
  const { api } = useContext(ApiContext) as ApiContextProps;
  const [movies, setMovies] = useState<MyMovie[]>([]);
  const navigate = useNavigate();

  const getAllFavoritesMovies = async () => {
    const { data: movies } = await api.get<MyMovie[]>("/favorite-movies");
    setMovies(movies);
  };

  useEffect(() => {
    getAllFavoritesMovies();
  }, []);

  return (
    <>
      <Nav />
      <S.Wrapper>
        <S.Title>Minha Lista</S.Title>
        <S.List>
          {movies.map((movie) => (
            <S.Card
              image={movie.poster_path}
              onClick={() => {
                navigate(
                  `/details/${movie.media_type || "movie"}/${movie.tmdb_id}`
                );
              }}
            />
          ))}
        </S.List>
      </S.Wrapper>
    </>
  );
};
