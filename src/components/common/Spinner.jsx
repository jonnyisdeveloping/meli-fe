import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ className }) => {
  return (
    <div className={`spinner ${className}`}>
      <img
        className="spinner__icon"
        src="/assets/images/loadingSpinner.svg"
        alt="Loading"
      />
    </div>
  );
};

Spinner.defaultProps = {
  className: '',
};

Spinner.propTypes = {
  className: PropTypes.string,
};

export default Spinner;
