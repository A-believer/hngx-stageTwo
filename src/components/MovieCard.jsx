import { Link } from "react-router-dom";
import imdbRating from "../assets/imdbLogo.png"
import tomatoRating from "../assets/tomatoLogo.png"
import {AiFillHeart} from "react-icons/ai"
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";


export default function MovieCard({ id, movieTitle, moviePoster, country, movieGenre, releaseDate, }) {
  const [favorites, setFavorites] = useState(false)
  function handleFavoriteToggle() {
    setFavorites(prev => !prev)
    toast.success("Movie added to Favorites")
  } 
  return (
    <Link to={`/movies/${id}`} className="flex flex-col gap-y-3 font-bold w-full" data-testid="movie-card">
      <div className="relative">
        <img src={`https://image.tmdb.org/t/p/w200${moviePoster}`} alt="movie poster" className="w-[350px] h-[370px] object-cover " data-testid="movie-poster" />
        <p
          onClick={handleFavoriteToggle}
          className="absolute sm:top-2 top-3 sm:right-2 right-[20px] p-2 bg-white/30 rounded-full z-[99]">
      <AiFillHeart className={`${favorites ? 'text-[#BE123C]': "text-white"}`}/>
        </p>
      </div>
      <p className="text-[#9CA3AF] text-xs">
        <span>USA, </span>
        <span data-testid="movie-release-date">{releaseDate}</span>
      </p>
      <p className="text-lg" data-testid="movie-title">{movieTitle}</p>

      {/* IMDB and tomato rating  */}
        <div className="flex items-center gap-x-10 font-normal justify-between w-full">
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
      <p className="text-[#9CA3AF]">{movieGenre}</p>
      <ToastContainer/>
    </Link>
  )
}
