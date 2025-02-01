function Search() {
  return (
    <nav className="uk-sticky">
      <div className="uk-margin">
        <form className="uk-search uk-search-default">
          <input
            className="uk-search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button className="uk-search-icon-flip"></button>
        </form>
      </div>
    </nav>
  );
}

export default Search;
