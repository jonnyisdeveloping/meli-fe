import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import gfm from 'remark-gfm';
import ErrorMessage from '../components/common/ErrorMessage';
import Spinner from '../components/common/Spinner';
import BreadCrumbs from '../components/content/BreadCrumbs';
import Content from '../components/layout/Content';
import Header from '../components/layout/Header';
import { mapProductCondition, thousandSeparator } from '../utils/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState(null);

  const { isLoading, error, data, isFetching } = useQuery(
    'fetchData',
    () => fetch(`/api/items/${id}`).then((res) => res.json()),
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  // Update categories for breadcrumbs on loading or fetching
  useEffect(() => {
    if (isLoading || isFetching) {
      setCategories(null);
    } else {
      setCategories(data?.categories);
    }
  }, [isLoading, isFetching]);

  const contentData = () => {
    if (isLoading || isFetching) return <Spinner />;

    if (error) return <ErrorMessage />;

    const product = data.item;

    return (
      <div className="row">
        <div className="col col-8">
          <div className="product-detail__image-container">
            <img
              className="product-detail__product-image"
              src={product.picture}
              alt={product.title}
            />
          </div>
          <div>
            <span className="product-detail__desc-title mb-lg">
              Descripcion del producto
            </span>

            <ReactMarkdown
              className="product-detail__desc-txt"
              remarkPlugins={[gfm]}
              // eslint-disable-next-line
              children={product.description}
            />
          </div>
        </div>

        <div className="col col-4 product-detail__info">
          <div className="product-detail__product-status mb-md">
            {mapProductCondition[product.condition]} - {product.sold_quantity}{' '}
            vendidos
          </div>
          <h1 className="product-detail__product-title mb-lg">
            {product.title}
          </h1>
          <div className="product-detail__product-price mb-lg">
            $ {thousandSeparator(product.price.amount)}{' '}
            {product.price.decimals && (
              <>
                .<sup>{product.price.decimals}</sup>
              </>
            )}
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
      <BreadCrumbs categories={categories} />
      <Content containerClass="p-lg">{contentData()}</Content>
    </div>
  );
};

export default ProductDetail;
