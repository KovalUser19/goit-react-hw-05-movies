import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy } from "react";

const HomePages = lazy(() => import('../pages/HomePages'));
const MoviesPages = lazy(() => (import('../pages/MoviesPages')));
const MovieDetailsPage = lazy(() => (import('../pages/MovieDetailsPage')));
const Cast = lazy(() => (import('../components/Cast/Cast')));
const Reviews = lazy(() => (import('../components/Reviews/Reviews')));

export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePages/>} />
          <Route path="movies" element={<MoviesPages/>} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
             <Route path="cast" element={<Cast />} />
             <Route path="reviews" element={<Reviews/>}/>
          </Route>
        </Route>
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </>
  );
};
