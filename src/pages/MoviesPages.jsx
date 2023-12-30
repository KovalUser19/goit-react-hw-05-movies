import SearchForm from "components/SearchForm/SearchForm";
import css from 'components/SearchForm/SearchForm.module.css';
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { fetchSearchMovie } from 'api/fetchSearchMovie';
import { useEffect, useState } from "react";

const MoviesPages = () => {

  const [searchMovie, setSearchMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const location = useLocation();
  const name = searchParams.get('name') ?? '';

  useEffect(() => {
    const getSearhMovie = async () => {
      try {
        const res = await fetchSearchMovie(name);
        setSearchMovie(res.results);
      }
      catch (error) {
        console.log(error);
      }
    }
    getSearhMovie()
  }, [name]);

  const handleSearchFormSubmit = (newQuery) => {
    if (query !== newQuery) {
      setSearchMovie([]);
    }
    setQuery(newQuery);
    setSearchParams({ name: newQuery });
  }

  return (
    <>
      <SearchForm onSubmit={handleSearchFormSubmit} />
      <ul className={css.items}>
        {searchMovie.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }} className={css.item}>
              {movie.title ? movie.title : movie.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
};
export default MoviesPages;