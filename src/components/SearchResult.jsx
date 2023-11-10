// SearchResults.jsx
import React from 'react';

const SearchResults = ({ results, onItemClick }) => {
  return (
    <div className="search-results">
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <a href="#" className="search-result-link" onClick={() => onItemClick(result)}>
              {result.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
