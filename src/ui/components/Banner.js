import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <div className="banner shadow-inner">
      <Link to="/">
        <img src="/logo.png" alt="ghibli's logo" />
      </Link>
    </div>
  );
}
