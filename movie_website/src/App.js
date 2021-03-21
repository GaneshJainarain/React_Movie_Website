import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import MovieList from './components/MovieList'
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';
import RemoveFavorites from "./components/RemoveFavorites"

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

const getMovieRequest = async (searchValue) => {

  const url =  `http://www.omdbapi.com/?s=${searchValue}&apikey=99cdf838&`
  const response = await fetch(url);
  const responseJson = await response.json();
  
  if (responseJson.Search) {
    setMovies(responseJson.Search);
  }
  
};

useEffect(() =>{
  getMovieRequest(searchValue);
}, [searchValue]);

const addFavoriteMovie = (movie) => {
  const newFavoriteList = [...favorites, movie];
  setFavorites(newFavoriteList);
}

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row'>
        <MovieList 
          movies={movies} 
          handleFavoritesClick={addFavoriteMovie} 
          favoriteComponent={AddFavorites}
        />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Favorites'/>
      </div>
      <div className='row'>
        <MovieList 
          movies={favorites} 
          handleFavoritesClick={addFavoriteMovie} 
          favoriteComponent={RemoveFavorites}
        />
      </div>
      
    </div>
  );
}

export default App;
