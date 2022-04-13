import { useEffect, useState, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Favorites from './pages/Favorites';
import Banner from './components/Banner';
import Footer from './components/Footer';
import fetchImages from './api.js';
import favsReducer from './utils/favsReducer';

const initFavsMovies = () => {
  return JSON.parse(localStorage.getItem('favsMovies')) || [];
};

function App() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredFilms, setFilteredFilms] = useState(films);
  const [favorites, dispatch] = useReducer(favsReducer, [], initFavsMovies);

  useEffect(() => {
    fetchImages().then((data) => {
      setFilms(data);
      setFilteredFilms(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('favsMovies', JSON.stringify(favorites));
  }, [favorites]);

  const handleChange = (e) => {
    let query = e.target.value.toLowerCase();
    let filter = films.filter(
      (film) =>
        film.title.toLowerCase().includes(query) ||
        film.original_title_romanised.toLowerCase().includes(query)
    );
    setFilteredFilms(filter);
  };

  const resetMovies = () => {
    setFilteredFilms(films);
  };

  const addToFavorite = (film) => {
    if (!favorites.includes(film)) {
      dispatch({ type: 'add', payload: film });
    } else {
      dispatch({ type: 'delete', payload: film.id });
    }
  };

  return (
    <div>
      <main className="main">
        <Banner></Banner>

        <Routes>
          <Route
            path="movie/:movieId"
            element={<MovieDetail films={films} />}
          ></Route>
          <Route
            path="favorites"
            element={
              <Favorites films={favorites} addToFavorite={addToFavorite} />
            }
          ></Route>
          <Route
            index
            element={
              <Home
                handleChange={handleChange}
                loading={loading}
                filteredFilms={filteredFilms}
                resetMovies={resetMovies}
                addToFavorite={addToFavorite}
                favorites={favorites}
              />
            }
          ></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
