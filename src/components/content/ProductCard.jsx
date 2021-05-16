import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = (props) => {
  const { title, picture, price, freeShipping, city } = props;
  return (
    <div className="product-card p-md pb0-md">
      <div className="product-card__container pb-md">
        <div className="container--fluid">
          <div className="row">
            <div className="product-card__picture-container mr-md">
              <img
                className="product-card__picture"
                src={picture}
                alt={title}
              />
            </div>
            <div className="product-card__content col col-5">
              <div className="mt-md mb-lg">
                <span className="product-card__price">${price}</span>
                {freeShipping && (
                  <img
                    className="product-card__free-shipping ml-md"
                    srcSet="/assets/icons/ic_shipping@2x.png 2x"
                    src="/assets/icons/ic_shipping.png"
                    alt="Free Shipping"
                    title="Free Shipping"
                  />
                )}
              </div>

              <h2 className="product-card__title">{title}</h2>
            </div>
            <div className="mt-md col col-offset-1">
              <span className="product-card__city">{city}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  freeShipping: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
};

export default ProductCard;
