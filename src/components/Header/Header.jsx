import { NavLink } from "react-router-dom";
  import css from './Header.module.css'

export const Header = () => {
  return (
  <header>
    <nav className={css.nav}>
        <NavLink to="/"className={css.active}>Home</NavLink>
       <NavLink to="/movies" className={css.active}>Movies</NavLink>
    </nav>
  </header>
  )
}