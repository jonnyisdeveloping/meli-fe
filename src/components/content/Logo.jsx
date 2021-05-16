import React from 'react';

function Logo() {
  return (
    <div className="logo">
      <img
        className="logo__img"
        srcSet="/assets/images/logo_ML@2x.png 2x"
        src="/assets/images/logo_ML.png"
        alt="Mercado Libre"
      />
    </div>
  );
}

export default Logo;
