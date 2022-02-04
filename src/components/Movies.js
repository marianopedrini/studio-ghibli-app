import Movie from './Movie';

export default function Movies({ films, resetMovies }) {
  return (
    <>
      <div className="container px-4 mx-auto mt-5">
        <h5 className="title-movies text-5xl pb-4 mb-2 pl-2 text-center">
          Movies
        </h5>
      </div>
      <div className="container px-4 mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {films.map((film) => {
          return (
            <Movie key={film.id} film={film} resetMovies={resetMovies}></Movie>
          );
        })}
      </div>
    </>
  );
}
