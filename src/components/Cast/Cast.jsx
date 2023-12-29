import { fetchMovieDetCast } from "api/fetchMovieDetCast"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

  const Cast = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const [isCast, setIsCast] = useState([])

   useEffect(() => {
     const getCast = async (id) => {

     try {
      const res = await fetchMovieDetCast(id);
    console.log(res.data.cast);
      setIsCast(res.data.cast)

    }
    catch (error) {
      console.log(error);
    }
  }
     getCast(movieId)
   }, [movieId])

console.log(isCast);
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=300x300';

  return (
    <ul>
      {isCast.map((el) => (<li key={el.id}>
        <img src={el.profile_path ? `https://image.tmdb.org/t/p/w200/${el.profile_path}` : defaultImg} alt={el.name} />
            <p>{el.name}</p>
            <p>Character: {el.character}</p>
     </li>))}

    </ul>
  )
}
export default Cast;