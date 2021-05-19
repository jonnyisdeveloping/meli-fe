import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BreadCrumbs = ({ categories }) => {
  const [breadCrumbText, setBreadCrumbText] = useState([]);

  // On categories update, re build breadcrumbs
  useEffect(() => {
    let breadcrumbs = [];
    if (categories?.length > 0) {
      breadcrumbs = categories.map((category, index) => {
        if (index + 1 === categories.length) {
          return (
            <Link
              className="breadcrumbs__link"
              to={`/items?search=${category}`}
              key={`breadcrumb_${category}`}
            >
              <span className="breadcrumbs__active">{category}</span>
            </Link>
          );
        }

        return (
          <Link
            className="breadcrumbs__link"
            to={`/items?search=${category}`}
            key={`breadcrumb_${category}`}
          >
            {category} &gt;{' '}
          </Link>
        );
      });
    }
    setBreadCrumbText(breadcrumbs);
  }, [categories]);

  return (
    <div className="breadcrumbs mb-md">
      <div className="container">
        <div className="row">
          <div className="breadcrumbs__list col col-10 col-offset-1">
            {breadCrumbText}
          </div>
        </div>
      </div>
    </div>
  );
};

BreadCrumbs.defaultProps = {
  categories: [],
};

BreadCrumbs.propTypes = {
  // eslint-disable-next-line
  categories: PropTypes.array,
};

export default BreadCrumbs;
