import axios from "axios";

const API_KEY = '58c7d466f9fd420f374bb22328749447'
const API_URL = 'https://api.themoviedb.org/3'


export async function fetchMoviesFromApi() {
   try {
    const response = await axios.get(`${API_URL}/movie/top_rated?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching top-rated movies:', error);
    throw error;
  }
}


export async function fetchMovieGenres() {
  try {
    const response = await axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}`);
    return response.data.genres;
  } catch (error) {
    console.error('Error fetching movie genres:', error);
    throw error;
  }
};

export async function fetchMovieDetails (movieId) {
  try {
    const response = await axios.get(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

