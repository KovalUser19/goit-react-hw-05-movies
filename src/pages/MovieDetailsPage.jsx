/* import { MovieDetails } from "components/MovieDetails/MovieDetails" */
import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom"
const MovieDetails = lazy(()=>('../components/MovieDetails/MovieDetails.jsx'))

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