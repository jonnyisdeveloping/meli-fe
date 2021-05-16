import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ children, containerClass }) => {
  return (
    <div className="content mb-lg">
      <div className="container">
        <div className="row">
          <div className="col col-10 col-offset-1">
            <div className={`content__container ${containerClass}`}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Content.defaultProps = {
  children: null,
  containerClass: '',
};

Content.propTypes = {
  children: PropTypes.element,
  containerClass: PropTypes.string,
};
export default Content;
