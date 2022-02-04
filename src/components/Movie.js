import { Link } from 'react-router-dom';

export default function Movie({ film, resetMovies }) {
  return (
    <div className="movie-card max-w-sm overflow-hidden my-3 mx-auto">
      <div>
        <div className="movie-card__img-container">
          <img
            className="w-full"
            src={film.movie_banner}
            alt={`portada ${film.title}`}
          ></img>
        </div>

        <div className="movie-card__title px-6 pt-4">
          <h3 className="text-xl font-bold">{film.title}</h3>
          <h6 className="text-sm text-zinc-500">
            ({`${film.original_title} | ${film.original_title_romanised}`})
          </h6>
        </div>
      </div>
      <div className="px-6 py-4">
        <p className="text-base film-description font-light">
          {film.description}
        </p>
      </div>
      <Link
        to={`/movie/${film.id}`}
        className="movie-card__button px-6 pb-4"
        onClick={resetMovies}
      >
        <button className="hover:bg-sky-50 py-2 px-4 mb-4 rounded-full">
          See more...
        </button>
      </Link>
    </div>
  );
}
