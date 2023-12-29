/* import { Cast } from "components/Cast/Cast" */
import { lazy } from "react";
const Cast = lazy(()=>('../components/Cast/Cast.jsx'))

 const CastPages = () => {
  return (
    <Cast/>
  )
}
export default CastPages;