import MoviesContainer from '../components/movies/MoviesContainer';
import Message from '../components/Message';
import { changeTitle } from '../utils/changeTitle';
import BackButton from '../components/BackButton';

const Favorites = ({ films, handleFavorite }) => {
  changeTitle('Studio Ghibli');

  return (
    <>
      <div className="block md:hidden mt-6 ml-2">
        <BackButton />
      </div>

      {films.length > 0 ? (
        <MoviesContainer
          films={films}
          title={'Favorites'}
          handleFavorite={handleFavorite}
          favorites={films}
        ></MoviesContainer>
      ) : (
        <div className="container px-4 mx-auto mt-5 relative ">
          <div className="mt-6 ml-2 hidden md:block">
            <BackButton />
          </div>
          <Message text={"You don't have any fav movies"} />
        </div>
      )}
    </>
  );
};

export default Favorites;
