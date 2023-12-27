import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchMovieDetails } from "api/fetchMovieDetails"
import css from './MovieDetails.module.css'

export const MovieDetails = () => {
  const { movieId } = useParams()
  console.log(movieId);

  const [movie, setMovie] = useState({})
  const [isInfo, setIsinfo]= useState('')

  useEffect(() => {

    const getMovie = async () => {
      try {

        const res = await fetchMovieDetails(movieId)
        setMovie(res.data)
      }
      catch (error) {
        console.log(error);
      }
      finally {
        setIsinfo(<h1>No iformation</h1>)
      }
    };
    getMovie()
  }, [movieId])


  const vote = Math.floor(movie.vote_average * 10);
  const  posterPath = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
  return (
    <div>
      <div className={css.button}>
        <button>Go back</button>
      </div>
      {movie.title ?
        (<div>
        <div className={css.wrapper}>
          <div>
            <img src={posterPath} alt="name" />
          </div>
          <div>
            <h1>{movie.title}</h1>
            <p>Vote average: {vote}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p className={css.genres}>
              {(movie.genres??[]).map((el) => (<p key={el.id}>{el.name}</p>))}</p>
          </div>
        </div>
        <ul className={css.additional}>
        <p>Additional information</p>
        <li>
          <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
        </li>
          </ul>
          </div>) : (<h1>{isInfo}</h1>)}
    </div>
  );
      }