import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy } from "react";
/* import { HomePages } from "pages/HomePages"; */
/* import { MoviesPages } from "pages/MoviesPages"; */

/* import { MovieDetailsPage } from "pages/MovieDetailsPage"; */
/* import { CastPages } from "pages/CastPages"; */
/* import { ReviewsPages } from "pages/ReviewsPages"; */


const HomePages = lazy(() => import('../pages/HomePages'));
const MoviesPages = lazy(() => (import('../pages/MoviesPages')));
const MovieDetailsPage = lazy(() => (import('../pages/MovieDetailsPage')));
const CastPages = lazy(() => (import('../pages/CastPages')));
const ReviewsPages = lazy(() => (import('../pages/ReviewsPages')));


export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePages/>} />
          <Route path="movies" element={<MoviesPages/>} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
             <Route path="cast" element={<CastPages />} />
             <Route path="reviews" element={<ReviewsPages/>}/>
          </Route>
        </Route>
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </>
  );
};
