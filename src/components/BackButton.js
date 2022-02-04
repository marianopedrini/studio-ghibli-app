import { Link } from 'react-router-dom';

export default function BackButton() {
  return (
    <Link className="movie-card__button" to="/">
      <button className="hover:bg-sky-50 py-2 px-4 mb-4 rounded-full">
        <i className="fas fa-chevron-left"></i>
        Back
      </button>
    </Link>
  );
}
