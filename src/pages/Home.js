import Searchbar from '../components/Searchbar';
import MoviesContainer from '../components/MoviesContainer';
import Message from '../components/Message';
import { ChangeTitle } from '../utils/ChangeTitle';

export default function Home({
  handleChange,
  filteredFilms,
  loading,
  resetMovies,
  handleFavorite,
  favorites,
}) {
  ChangeTitle('Studio Ghibli');
  return (
    <>
      <Searchbar handleChange={handleChange} />

      {!loading ? (
        filteredFilms.length !== 0 ? (
          <MoviesContainer
            films={filteredFilms}
            resetMovies={resetMovies}
            handleFavorite={handleFavorite}
            title={'Movies'}
            favorites={favorites}
          ></MoviesContainer>
        ) : (
          <Message text={'Sorry! Nothing to show'} />
        )
      ) : (
        <Message text={'Loading...'} />
      )}
    </>
  );
}
