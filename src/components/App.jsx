import { Route, Routes  } from "react-router-dom";
/* import { Movies } from './Movies/Movies' */
import { Header } from "./Header/Header";
import { HomePages } from "pages/HomePages";
import { MoviesPages } from "pages/MoviesPages";


export const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePages/>} />
        <Route path="/movies" element={<MoviesPages/>} />
        <Route path="/:movieId" element={<MoviesPages/>}/>
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </>
  );

};
