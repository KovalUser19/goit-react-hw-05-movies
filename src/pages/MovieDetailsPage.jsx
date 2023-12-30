 import  MovieDetails  from "../components/MovieDetails/MovieDetails"
import { Suspense } from "react";
import { Outlet } from "react-router-dom"

 const MovieDetailsPage = () => {
  return (
    <>
      <MovieDetails />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

    </>
  )
}
export default MovieDetailsPage;