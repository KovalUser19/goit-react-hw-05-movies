import { fetchMovieDetReviews } from "api/fetchMovieDetReviews";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from './Reviews.module.css'

  const Reviews = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [isReviews, setIsReviews] = useState([]);

  useEffect(() => {
    const getReviews = async (id) => {
    try {
      const res = await fetchMovieDetReviews(id)
      setIsReviews(res.data.results)
    }
    catch(error) {
      console.log(error);
    }
  }
    getReviews(movieId)
  }, [movieId])


  console.log(isReviews);
  return (
    <ul className={css.review}>
      {isReviews.length > 0 ? (isReviews.map((el) => (
        <li key={el.id}>
          <p>{el.author}</p>
          <p>{el.content}</p>
      </li>))):(<p>We don't have any movie</p>)}
    </ul>
  )
}
export default Reviews;