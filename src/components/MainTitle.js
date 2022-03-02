import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import BackButton from '../components/BackButton';

const MainTitle = ({ title }) => {
  const location = useLocation();

  return (
    <div className="container px-4 mx-auto mt-5 relative">
      {location.pathname === '/favorites' && (
        <div className="absolute hidden md:block">
          <BackButton />
        </div>
      )}

      <h5 className="title-movies text-5xl pb-4 mb-2 pl-2 text-left md:text-center">
        {title}
      </h5>

      {location.pathname === '/' && (
        <Link className="go-fav-button" to="favorites">
          <button className="hover:bg-sky-50 py-2 px-4 mb-4 rounded-full">
            See Favs <FontAwesomeIcon className="is-fav" icon={faHeart} />
          </button>
        </Link>
      )}
    </div>
  );
};

export default MainTitle;
