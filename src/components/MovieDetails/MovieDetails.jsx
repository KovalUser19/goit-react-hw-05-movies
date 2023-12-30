import {useCallback, useEffect, useRef, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import { fetchMovieDetails } from "api/fetchMovieDetails"
import css from './MovieDetails.module.css'

 const MovieDetails = () => {
  const { movieId } = useParams()
  console.log(movieId);

  const location = useLocation();
  console.log(location);
  const backLink = useRef(location.state?.from ?? '/');

  const [movie, setMovie] = useState({})
  const [isInfo, setIsinfo] = useState('')

  const getMovie =  useCallback(async () => {
      try {
        const res = await fetchMovieDetails(movieId)
        setMovie(res.data);
        console.log(movie);
      }
      catch (error) {
        console.log(error);
      }
      finally {
        setIsinfo(<h1>No iformation</h1>)
      }
    },[movie,movieId]);

  useEffect(() => {
    getMovie()
  }, [])

  const vote = Math.floor(movie.vote_average * 10);
  const  posterPath = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
  return (
    <div>
      <div className={css.button}>
        <Link to={backLink.current}>
          <button>Go back</button>
          </Link>
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
        <p className={css.info}>Additional information</p>
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
export default MovieDetails;