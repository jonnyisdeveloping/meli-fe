import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <form className="search-bar__form">
        <input className="search-bar__input" type="text" placeholder="Nunca dejes de buscar" />
        <button className="search-bar__button" type="submit">
          <img srcSet="/assets/icons/ic_Search@2x.png 2x" src="/assets/icons/ic_Search.png" alt="Buscar" />
        </button>
      </form>

    </div>
  );
}

export default SearchBar;
