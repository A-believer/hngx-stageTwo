import { useEffect, useState } from "react"
import { fetchMoviesFromApi, fetchMovieGenres, fetchMovieDetailsWithId } from "../movieApi"
import { Link } from "react-router-dom";
import {FaAngleRight} from "react-icons/fa"
import MovieCard from "./MovieCard"


export default function FeaturedMovies() {
  const [movies, setMovies] = useState([])
  const [movieDetail, setMovieDetail] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingDetails, setLoadingDetails] = useState(true)
  // const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchMoviesFromApi()
    .then((moviesData) => {
      setMovies(moviesData);
      const movieData = movies.map(movie => fetchMovieDetailsWithId(movie.id).then(data => data))

      Promise.all(movieData)
        .then(movies => {
          setMovieDetail(movies)
          setLoadingDetails(false)
        })
        .catch((error) => {
        console.error('Error:', error);
        setLoadingDetails(false);
        })
      
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
    
    console.log(movies)
    console.log(movieDetail)

  }, [])

  

  return (
    <section className="lg:px-24 md:px-6 px-4 pb-20 my-20">
      <div className="flex justify-between items-center mb-11 gap-x-20 flex-wrap gap-y-2">
        <h1 className="sm:text-4xl text-2xl font-bold">Featured Movies</h1>
        <button className="flex items-center md:text-lg textsm font-normal text-[#BE123C] gap-x-2 ">See more <FaAngleRight/></button>
      </div>
      
      <>
        {
          (loading && loadingDetails) ? 
            <h1>Loading...</h1> :

            <div className="grid xl:grid-cols-4 md:grid-col-3 grid-cols-1 xl:gap-20 gap-10 mx-5">
             { movies.map((movie, index) => (
               <MovieCard
                 key={movie.id}
                 id={movie.id}
                 movieTitle={movie.title} 
                 moviePoster={movie.poster_path}
                 />
              ))}
            </div>
        }
      </>
    </section>
  )
}
