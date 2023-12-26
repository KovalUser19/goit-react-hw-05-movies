import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchMovieDetails } from "api/fetchMovieDetails"

export const MovieDetails = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await fetchMovieDetails(movieId)
        console.log(res);
        setMovie(res)
      }
      catch (error) {
        console.log(error);
      }
    };

    movieId && getMovie()
  }, [movieId])


  return (
    <div>
      <button>Go back</button>
      <div>
        <img src="" alt=""/>
      </div>
      <div>
        <h1>{ movie.title}</h1>
        <p></p>
        <h2></h2>
        <p></p>
        <h2></h2>
        <p></p>
      </div>
    </div>
  )
}