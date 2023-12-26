import { MovieDetails } from "components/MovieDetails/MovieDetails"
import { SearchForm } from "components/SearchForm/SearchForm"
/* import { useState } from "react"; */


export const MoviesPages = () => {
  /* const [moviesData, setMoviesData] = useState([])

  const isMoviesPagesEmpty = moviesData.length === 0; */
  return (
    <>
      {/* {isMoviesPagesEmpty ?<SearchForm /> : <MovieDetails />} */}
      <SearchForm />
      <MovieDetails/>
     </>
  )
}