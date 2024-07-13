import { IMovie } from "../../types/entities/movies";

export const getImageUrl = (data: string | IMovie) => {
  let url = data;

  if (typeof url === "object") {
    url = url.poster_path;
  }

  return `https://image.tmdb.org/t/p/original${url}`;
};
