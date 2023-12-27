import { fetchMovieDetCast } from "api/fetchMovieDetCast"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const CastPages = () => {
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
 const  profilePath = `https://image.tmdb.org/t/p/w200/${isCast.profile_path}`
  return (
    <ul>
      {isCast.map((el) => (<li key={el.id}>
        <img src={profilePath} alt={el.name} />
            <p>{el.name}</p>
            <p>Character: {el.characelter}</p>
     </li>))}

    </ul>
  )
}