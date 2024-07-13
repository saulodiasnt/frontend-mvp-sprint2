import { Banner } from "../../components/Banner";
import { Category } from "../../components/Category";

import { Nav } from "../../components/Nav";
import * as tmdb from "../../utils/services/tmdb-api.service";
console.log({ tmdb });

const Home = () => {
  return (
    <>
      <Nav />
      <Banner fetch={tmdb.useGetTrendingQuery()} />
      <Category
        title="Action Movies"
        fetch={tmdb.useGetTrendingQuery()}
      ></Category>
      <Category
        title="Netflix Originals"
        fetch={tmdb.useGetDocumentariesQuery()}
      ></Category>
      <Category title="Trending" fetch={tmdb.useGetTopRatedQuery()}></Category>
      <Category title="Top Rated" fetch={tmdb.useGetDiscoverQuery()}></Category>
      <Category
        title="Comedy Movies"
        fetch={tmdb.useGetComedyQuery()}
      ></Category>
      <Category
        title="Horror Movies"
        fetch={tmdb.useGetHorrorQuery()}
      ></Category>
      <Category
        title="Romance Movies"
        fetch={tmdb.useGetRomanceQuery()}
      ></Category>
      <Category title="TV SHOW" fetch={tmdb.useGetTvShowQuery()}></Category>
    </>
  );
};

export default Home;
