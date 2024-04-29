function Search({ searchHandler, setInput }) {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  return (
    <div className="search">
      <input
        className="input"
        onChange={inputHandler}
        onKeyDown={handleKeyDown}
        type="text"
      />
      <button onClick={searchHandler}>Search</button>
    </div>
  );
}

export default Search;
