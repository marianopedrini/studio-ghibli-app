import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Searchbar({ handleChange }) {
  return (
    <div className="searchbar flex items-center max-w-md mx-auto shadow-md border-0 pl-5 pr-3 py-1 rounded-full">
      <input
        className="flex-grow py-2 px-2"
        placeholder="Search by name..."
        onChange={(e) => handleChange(e)}
      />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
}
