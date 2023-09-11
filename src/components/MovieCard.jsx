import { Link } from "react-router-dom";
import imdbRating from "../assets/imdbLogo.png"
import tomatoRating from "../assets/tomatoLogo.png"


export default function MovieCard({id, movieTitle, moviePoster, country, genre, yearOfRelease, tomato, imdb}) {
  return (
    <Link to={`/movies/${id}`} className="flex flex-col ga-y-3 font-bold w-full mx-auto" data-testid="movie-card">
      <img src={`https://image.tmdb.org/t/p/w200${moviePoster}`} alt="movie poster" className="w-[250px] h-[370px] object-contain " data-testid="movie-poster"/>
      <p className="text-[#9CA3AF] text-xs">
        <span>{country}</span>,
        <span data-testid="movie-release-date">{yearOfRelease}</span>
      </p>
      <p className="text-lg" data-testid="movie-title">{movieTitle}</p>

      {/* IMDB and tomato rating  */}
        <div className="flex items-center gap-x-10 my-4 font-normal justify-between w-full">
          <div className="flex gap-x-2">
            <img src={imdbRating} alt="imdb" className="w-9 h-4 object-contain" />
            <span className="text-xs">86.0/100</span>
          </div>
          <div  className="flex gap-x-2">
            <img src={tomatoRating} alt="rotten tomatoes rating" className="w-9 h-4 object-contain"/>
            <span className="text-xs">97%</span>
          </div>
        </div>

      {/* Genre  */}
      <p className="text-[#9CA3AF]">{genre}</p>
    </Link>
  )
}
