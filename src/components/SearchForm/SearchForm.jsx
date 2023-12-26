import { useState } from 'react';
import css from './SearchForm.module.css';

export const SearchForm = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    console.log(query);
    setQuery(e.target.value)
  }

  return (
    <form className={css.form}>
      <input
        className={css.input}
        type="text"
        autoComplete="off"
        onChange={handleChange}
      >
      </input>
        <button type="submit">Search</button>
    </form>
  )
}