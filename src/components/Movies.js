import MainTitle from './MainTitle';
import Movie from './Movie';

export default function Movies({
  films,
  resetMovies,
  addToFavorite,
  title,
  favorites,
}) {
  return (
    <>
      <MainTitle title={title} />
      <div className="container px-4 mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {films.map((film) => {
          let isFav = favorites.some((x) => x.id === film.id);
          return (
            <Movie
              key={film.id}
              film={film}
              resetMovies={resetMovies}
              addToFavorite={addToFavorite}
              isFav={isFav}
            ></Movie>
          );
        })}
      </div>
    </>
  );
}
