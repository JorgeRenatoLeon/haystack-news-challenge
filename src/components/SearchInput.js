'use client';

import { useEffect, useState } from 'react';

export default function SearchInput({ searchFunction, search }) {
  const [searchText, setSearchText] = useState(search ? search : '');

  return (
    <div className="input-group mb-3">
      <input
        id="search-input"
        type="text"
        className="form-control"
        placeholder="Search photos..."
        aria-label="Search photos..."
        aria-describedby="button-search"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        onSubmit={() => searchFunction(searchText)}
      />
      <button
        className="btn btn-primary"
        type="button"
        id="button-search"
        onClick={() => searchFunction(searchText)}
      >
        Search
      </button>
    </div>
  );
}
