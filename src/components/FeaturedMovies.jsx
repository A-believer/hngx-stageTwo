import { useEffect, useState } from "react"
import { fetchMoviesFromApi, fetchMovieGenre } from "../movieApi"
import {FaAngleRight} from "react-icons/fa"
import MovieCard from "./MovieCard"


export default function FeaturedMovies() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchMoviesFromApi()
    .then((moviesData) => {
      setMovies(moviesData.slice(0, 10));
      console.log(moviesData)
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
    
    
    fetchMovieGenre()
      .then(genre => {
        setGenres(genre)
        console.log(genre)
      }).catch(error => {
      console.error('Error:', error);
    })
    console.log(movies)
  }, [])

  function getMovieGenre(genreId) {
     return genreId?.map((id) => genres?.find((genre) => genre.id === id).name)
     .join(', ')
  }

  return (
    <section className="lg:px-24 md:px-6 px-4 pb-20 my-20">
      <div className="flex justify-between items-center mb-11 gap-x-20 flex-wrap gap-y-2">
        <h1 className="sm:text-4xl text-2xl font-bold">Featured Movies</h1>
        <button className="flex items-center md:text-lg textsm font-normal text-[#BE123C] gap-x-2 ">See more <FaAngleRight/></button>
      </div>
      
      <>
        {
          (loading) ? 
            <h1>Loading...</h1> :

            <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 xl:gap-20 gap-10 sm:mx-0 mx-5">
             { movies.map((movie) => (
               <MovieCard
                 releaseDate={movie.release_date.slice(0, 4)}
                 key={movie.id}
                 id={movie.id}
                 movieTitle={movie.title} 
                 moviePoster={movie.poster_path}
                 movieGenre={getMovieGenre(movie.genre_ids)}
                 />
              ))}
            </div>
        }
      </>
    </section>
  )
}
