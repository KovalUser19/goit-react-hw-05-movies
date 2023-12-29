/* import { Reviews } from "components/Reviews/Reviews" */
import { lazy } from "react";
const Reviews = lazy(()=>('../components/Reviews/Reviews.jsx'))

 const ReviewsPages = () => {
  return (
    <Reviews/>
  )
}
export default ReviewsPages;