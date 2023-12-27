 import { MovieDetails } from "components/MovieDetails/MovieDetails"
import { Outlet } from "react-router-dom"

export const MovieDetailsPage = () => {
  return (
    <>
    <MovieDetails/>
        <Outlet />

    </>
  )
}
