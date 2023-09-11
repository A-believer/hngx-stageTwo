import { useEffect, useState } from "react"
import { fetchMoviesFromApi, fetchMovieGenres, fetchMovieDetails } from "../movieApi"
import { Link } from "react-router-dom";


export default function FeaturedMovies() {
   const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchMoviesFromApi()
    .then((moviesData) => {
      setMovies(moviesData);
      console.log(moviesData)
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });

     fetchMovieGenres()
      .then((genreData) => {
        setGenres(genreData);
      })
      .catch((error) => {
        console.error('Error fetching movie genres:', error);
      });
  }, [])

  const getGenreNames = (genreIds) => {
    const genreNames = [];
    for (const genreId of genreIds) {
      const genre = genres.find((g) => g.id === genreId);
      if (genre) {
        genreNames.push(genre.name);
      }
    }
    return genreNames.join(', ');
  };

    const getPosterPath = (movie) => {
    return movie.poster_path
      ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
      : 'No poster available';
  };

  return (
    <section>
      <h1>Featured Movies</h1>
      <>
        {
          loading ? 
            <h1>Loading...</h1> :

            <div>
             { movies.map((movie) => (
               <Link to={`/movies/${movie.id}`} key={movie.id}>{movie.title} <img src={getPosterPath(movie)} alt={movie.title} /></Link>
              ))}
            </div>
        }
      </>
    </section>
  )
}
