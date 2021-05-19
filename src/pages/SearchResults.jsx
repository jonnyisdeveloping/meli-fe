import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';
import BreadCrumbs from '../components/content/BreadCrumbs';
import ProductCard from '../components/content/ProductCard';
import Content from '../components/layout/Content';
import Header from '../components/layout/Header';
import Spinner from '../components/common/Spinner';
import ErrorMessage from '../components/common/ErrorMessage';

const SearchResults = ({ search }) => {
  const [categories, setCategories] = useState(null);
  const { isLoading, error, data, isFetching, refetch } = useQuery(
    'fetchData',
    () => fetch(`/api/items?q=${search}`).then((res) => res.json()),
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  // On a new search, refetch products
  useEffect(() => {
    refetch();
  }, [search]);

  // Update categories for breadcrumbs on loading or fetching
  useEffect(() => {
    if (isLoading || isFetching) {
      setCategories(null);
    } else {
      setCategories(data?.categories);
    }
  }, [isLoading, isFetching]);

  const contentData = () => {
    if (isLoading || isFetching) return <Spinner className="p-lg" />;

    if (error) return <ErrorMessage />;

    const products = data?.items;

    if (products.length > 0) {
      return (
        <div className="content">
          {products.map((product) => (
            <ProductCard
              id={product?.id}
              title={product?.title}
              picture={product?.picture}
              price={product?.price.amount}
              city={product?.city}
              freeShipping={product?.free_shipping}
              key={product?.id}
            />
          ))}
        </div>
      );
    }
    return <div className="content p-lg">No results found</div>;
  };

  return (
    <div className="search-results">
      <Header />
      <BreadCrumbs categories={categories} />
      <Content>{contentData()}</Content>
    </div>
  );
};

SearchResults.defaultProps = {
  search: '',
};

SearchResults.propTypes = {
  search: PropTypes.string,
};

export default SearchResults;
