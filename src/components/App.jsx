import { Route, Routes  } from "react-router-dom";
import { HomePages } from "pages/HomePages";
import { MoviesPages } from "pages/MoviesPages";
import { Layout } from "./Layout/Layout";

export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePages/>} />
          <Route path="movies" element={<MoviesPages/>} />
          <Route path="movies/:movieId" element={<MoviesPages/>}/>
        </Route>
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </>
  );
};
