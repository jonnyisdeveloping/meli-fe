import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../content/Logo';
import SearchBar from '../content/SearchBar';

function Header() {
  return (
    <div className="header mb-md">
      <div className="container">
        <div className="row">
          <div className="col col-1 col-offset-1">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="col col-9">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
