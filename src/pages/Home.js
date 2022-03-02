import Searchbar from '../components/Searchbar';
import Movies from '../components/Movies';
import Message from '../components/Message';
import { ChangeTitle } from '../utils/ChangeTitle';

export default function Home({
  handleChange,
  filteredFilms,
  loading,
  resetMovies,
  addToFavorite,
  favorites,
}) {
  ChangeTitle('Studio Ghibli');
  return (
    <>
      <Searchbar handleChange={handleChange} />

      {!loading ? (
        filteredFilms.length !== 0 ? (
          <Movies
            films={filteredFilms}
            resetMovies={resetMovies}
            addToFavorite={addToFavorite}
            title={'Movies'}
            favorites={favorites}
          ></Movies>
        ) : (
          <Message text={'Sorry! Nothing to show'} />
        )
      ) : (
        <Message text={'Loading...'} />
      )}
    </>
  );
}
