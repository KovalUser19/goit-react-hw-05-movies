
import { lazy } from "react";
 const Home = lazy(()=>('../components/Home/Home.jsx'))


 const HomePages = () => {
  return (
    <>
      <h1>Trending today</h1>
      <Home/>
  </>
  )
}
export default HomePages;