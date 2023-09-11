import { useParams } from "react-router-dom"
import Sidebar from "./Sidebar"
import MovieDetails from "./MovieDetails"
import { useEffect, useState } from "react"
import { fetchMovieDetailsWithId } from "../movieApi"

export default function MoviesDetailsPage() {
    const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
     fetchMovieDetailsWithId(id)
    .then((moviesData) => {
      setMovie(moviesData);
      console.log(moviesData)
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, [id])
    
  const genre = movie?.genres?.map((genre) => (
    <p key={genre.id}>{genre.name}</p>
  ))

  return (
      <main className="font-detail flex w-full lg:gap-x-10 gap-x-6">
      <Sidebar />
      <>
        {loading ? 
          <h1 className="text-center flex items-center justify-center">Loading...</h1> :
          <><MovieDetails
            overview={movie.overview}
            voteAverage={movie.vote_average}
            genre={genre}
            yearOfRelease={(movie.release_date).slice(0, 4)}
            movieDuration={movie.runtime}
            movieTitle={movie.title}
            movieBackdrop={movie.backdrop_path}
            movie={movie.title} /></>}
      </>
      
          
    </main>
  )
}