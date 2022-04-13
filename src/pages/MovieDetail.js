import { useParams } from 'react-router-dom';

import MovieBanner from '../components/MovieBanner';
import BackButton from '../components/BackButton';
import Poster from '../components/Poster';
import { ChangeTitle } from '../utils/ChangeTitle';

export default function MovieDetail({ films }) {
  const { slug } = useParams();

  const film = films.find(
    (film) =>
      film.title.toLowerCase().replace("'", '').split(' ').join('-') === slug
  );

  if (!film) return null;

  ChangeTitle(`${film.title} - Studio Ghibli`);

  return (
    <>
      <div className="container px-4 mx-auto my-5 ">
        <BackButton />
        <div>
          <div className="mt-4 col-span-4">
            <MovieBanner
              img={film.movie_banner}
              title={film.title}
              titlejpn={`${film.original_title} | ${film.original_title_romanised}`}
            ></MovieBanner>

            <div className="movie-detail flex flex-col md:flex-row mt-6 md:px-14">
              <div className="flex flex-col md:pr-14 md:w-4/5">
                <div className="md:px mb-8">
                  <h5 className="text-3xl mb-2 font-semibold pl-2">
                    Description
                  </h5>
                  <p className="text-xl font-light">{film.description}</p>
                </div>
                <div className="flex gap-x-6 md:gap-x-16">
                  <div>
                    <p className="dot text-xl mb-1 font-semibold">Director: </p>
                    <p className="text-xl"> {film.director}</p>
                  </div>
                  <div>
                    <p className="dot text-xl mb-1 font-semibold">
                      Release Year:{' '}
                    </p>
                    <p className="text-xl">{film.release_date}</p>
                  </div>
                  <div>
                    <p className="dot text-xl mb-1 font-semibold">
                      Rotten Tomatoes:{' '}
                    </p>
                    <p className="text-xl">{film.rt_score}</p>
                  </div>
                </div>
              </div>

              <Poster img={film.image} title={film.title}></Poster>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
