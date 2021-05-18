import React from 'react';
import { useQuery } from 'react-query';
import BreadCrumbs from '../components/content/BreadCrumbs';
import Content from '../components/layout/Content';
import Header from '../components/layout/Header';

const ProductDetail = () => {
  const { isLoading, error, data } = useQuery(
    'fetchData',
    () =>
      fetch(
        'https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1'
      ).then((res) => res.json()),
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  const contentData = () => {
    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>{`An error has occurred: ${error.message}`}</div>;

    return (
      <div className="row">
        <div className="col col-8">
          <img
            className="product-detail__product-image"
            src="https://via.placeholder.com/800"
            alt="productImage"
          />
          <div>
            <h2 className="product-detail__desc-title mb-lg">
              Descripcion del producto
            </h2>
            <p className="product-detail__desc-txt">{data[0]}</p>
          </div>
        </div>

        <div className="col col-4 product-detail__info">
          <div className="product-detail__product-status mb-md">
            Nuevo - 234 vendidos
          </div>
          <h2 className="product-detail__product-title mb-lg">
            Deco reverse sombrero oxford
          </h2>
          <div className="product-detail__product-price mb-lg">
            $1980 <sup>00</sup>
          </div>
          <button
            className="product-detail__buy-btn btn btn--primary"
            type="button"
          >
            Comprar
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="product-detail">
      <Header />
      <BreadCrumbs />
      <Content containerClass="p-lg">{contentData()}</Content>
    </div>
  );
};

export default ProductDetail;
