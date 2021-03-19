import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import React, {useState, useEffect} from 'react'
import MovieList from "/Users/richeyjay/Desktop/React_Movie_Website/movie_website/src/components/MovieList.js"

const App = () => {
  const [movies, setMovies] = useState([]);

const getMovieRequest = async () => {

  const url =  'http://www.omdbapi.com/?s=star wars&apikey=99cdf838&'
  const response = await fetch(url);
  const responseJson = await response.json();
  console.log(responseJson);
  setMovies(responseJson.Search);
};

useEffect(() =>{
  getMovieRequest();
}, []);

  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        <MovieList movies={movies}/>
      </div>
      
    </div>
  );
}

export default App;
