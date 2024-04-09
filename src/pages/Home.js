import Searchbar from '../ui/components/Searchbar';
import MoviesContainer from '../ui/components/movies/MoviesContainer';
import Message from '../ui/components/Message';
import { changeTitle } from '../utils/changeTitle';
import MoviesSkeleton from '../ui/skeleton';
import MainTitle from '../ui/components/MainTitle';

export default function Home({
  handleChange,
  filteredFilms,
  loading,
  resetMovies,
  handleFavorite,
  favorites,
}) {
  changeTitle('Studio Ghibli');
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
        <>
          <MainTitle title={'Movies'} />
          <MoviesSkeleton />
        </>
      )}
    </>
  );
}
