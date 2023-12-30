
import { fetchMovies } from "api/fetchMovies";
import { useState,  useEffect } from "react";
import css from './Home.module.css'
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const respons = await fetchMovies();
        setMovies(respons.data.results)
      }
      catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    fetchData()
  }, []);

  return (
    <ul className={css.items}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} className={css.item}>{movie.title ? movie.title : movie.name}</Link>
        </li>
      ))}
    </ul>
  );
};
export default Home;