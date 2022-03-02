import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  let navigate = useNavigate();
  return (
    <div className="movie-card__button" onClick={() => navigate(-1)}>
      <button className="hover:bg-sky-50 py-2 px-4 rounded-full">
        <i className="fas fa-chevron-left"></i>
        Back
      </button>
    </div>
  );
}
