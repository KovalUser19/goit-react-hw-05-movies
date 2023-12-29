
/* import { SearchForm } from "components/SearchForm/SearchForm" */
import { lazy } from "react";
 const SearchForm = lazy(()=>('../components/SearchForm/SearchForm.jsx'))

 const MoviesPages = () => {
  return (
    <SearchForm/>
  )
}
export default MoviesPages;