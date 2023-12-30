import { useState } from 'react';
import css from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {

 const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(query);
    setQuery('')
  }
  const handleChange = (e) => {
    if (e.target.value === '') {
        return setQuery('')
      }
    setQuery(e.target.value)
    };

  return (
    <>
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        name='search'
        type="text"
        value={query}
        autoComplete="off"
          onChange={handleChange}
      >
      </input>
      <button type="submit">Search</button>
    </form>
   </>
  )
}
export default SearchForm;