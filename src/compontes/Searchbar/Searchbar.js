import "./Searchbar.css";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-wrapper">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search sarees by name, color, fabric..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <i className="bi bi-search"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
