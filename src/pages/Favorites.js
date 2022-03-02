import Movies from '../components/Movies';
import Message from '../components/Message';
import { ChangeTitle } from '../utils/ChangeTitle';
import BackButton from '../components/BackButton';

const Favorites = ({ films, addToFavorite }) => {
  ChangeTitle('Studio Ghibli');

  return (
    <>
      <div className="block md:hidden mt-6 ml-2">
        <BackButton />
      </div>

      {films.length > 0 ? (
        <Movies
          films={films}
          title={'Favorites'}
          addToFavorite={addToFavorite}
          favorites={films}
        ></Movies>
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
