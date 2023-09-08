/* eslint-disable react/prop-types */
import { BiSearchAlt } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const setSearchParams = useSearchParams()[1];

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      setSearchParams({ search: event.target.value });
    }
  };

  return (
    <div className="input-group input-group-sm">
      <input
        type="search"
        className="form-control"
        placeholder="Search"
        onKeyDown={(event) => handleSearch(event)}
      />
      <button className="input-group-text">
        <BiSearchAlt />
      </button>
    </div>
  );
};

export default Search;
