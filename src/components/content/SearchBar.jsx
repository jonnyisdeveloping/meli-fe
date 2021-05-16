import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import getQueryString from '../../helpers/helpers';

function SearchBar({ history }) {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const queryValue = getQueryString('search');
    if (queryValue) {
      setSearchQuery(queryValue);
    }
  }, []);

  const onSearchQueryChange = (value) => {
    setSearchQuery(value);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      history.push(`/items?search=${searchQuery}`);
    }
  };
  return (
    <div className="search-bar">
      <form className="search-bar__form" onSubmit={(e) => onSearchSubmit(e)}>
        <input
          className="search-bar__input"
          onChange={(e) => onSearchQueryChange(e.target.value)}
          value={searchQuery}
          type="text"
          placeholder="Nunca dejes de buscar"
        />
        <button className="search-bar__button" type="submit">
          <img
            srcSet="/assets/icons/ic_Search@2x.png 2x"
            src="/assets/icons/ic_Search.png"
            alt="Buscar"
          />
        </button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(SearchBar);
