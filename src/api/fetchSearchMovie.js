import axios from "axios";
export const fetchSearchMovie = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: { include_adult: 'false', language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzAyNWQ0M2M1NDVhNDYyMjYyNWIwYTEyYjBlOTBiMSIsInN1YiI6IjY1ODZlMmNiNjg4Y2QwNTg1MDg0MWE3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dqtqhsupjJ-uMQuBN6kHOzvbhWQ0lKMjlVN2gMext14'
    }
  }
  try {
    const respons = await axios(options);
    return respons;
  }
  catch (error) {
    throw (error);
  }
}