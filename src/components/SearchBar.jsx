import React from 'react';

function SearchBar({ fetchGiphy }) {
  function handleChange() {
    fetchGiphy(event.currentTarget.value);
  }
  return (
    <div>
      <input type="text" className="form-search form-control" onChange={handleChange} />
    </div>
  );
}

export default SearchBar;
