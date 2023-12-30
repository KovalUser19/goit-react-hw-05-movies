import { useEffect, useState } from 'react';
import css from './SearchForm.module.css';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'api/fetchSearchMovie';

  const SearchForm = () => {
  const [searchMovie, setSearchMovie] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);

  const query = searchParams.get('query') ?? '';
  console.log(query);

  useEffect(() => {
    const getSearhMovie = async () => {
    try {
      const res = await fetchSearchMovie(query);
      console.log(res);
      console.log(res.results);
      setSearchMovie(res.results)
    }
    catch (error) {
      console.log(error);
    }
  }
    getSearhMovie()
  },[query])

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const updateQueryString = (e) => {
    if (e.target.value === '') {
    return setSearchParams({})
  }
   setSearchParams({ query: e.target.value })
  }

  return (
    <>
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        name='search'
        type="text"
        value={query}
        autoComplete="off"
          onChange={updateQueryString}
      >
      </input>
      <button type="submit">Search</button>
    </form>

    <ul className={css.items}>
      {searchMovie.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{from:location}} className={css.item}>{movie.title ? movie.title : movie.name}</Link>
        </li>
      ))}
      </ul>
      </>
  )
}
export default SearchForm;