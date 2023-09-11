import { useParams } from "react-router-dom"
import Sidebar from "./Sidebar"
import MovieDetails from "./MovieDetails"

export default function MoviesDetailsPage() {
    const { id } = useParams()
    

  return (
      <main className="font-detail">
        <Sidebar />
        <MovieDetails/>  
    </main>
  )
}