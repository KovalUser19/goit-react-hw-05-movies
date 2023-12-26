
import { fetchMovies } from "api/fetchMovies";
import { useState,  useEffect } from "react";
import css from './Home.module.css'
import { Link } from "react-router-dom";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const respons = await fetchMovies();
        console.log(respons);
          setMovies(respons.data.results)
      }
      catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    fetchData()
  },[])

  return (
      <ul className={css.items}>
      {movies.map(movie => (
          <Link  className={css.item} key={movie.id} to='/:movieId'>
           <li>{movie.title ? movie.title : movie.name}</li>
          </Link>
      ))}
        </ul>


  )
}