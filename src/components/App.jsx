import { Route, Routes  } from "react-router-dom";
import { HomePages } from "pages/HomePages";
import { MoviesPages } from "pages/MoviesPages";
import { Layout } from "./Layout/Layout";

import { MovieDetailsPage } from "pages/MovieDetailsPage";
import { CastPages } from "pages/CastPages";
import { ReviewsPages } from "pages/ReviewsPages";

export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePages/>} />
          <Route path="movies" element={<MoviesPages/>} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
             <Route path="cast" element={<CastPages />} />
             <Route path="review" element={<ReviewsPages/>}/>
          </Route>
        </Route>
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </>
  );
};
