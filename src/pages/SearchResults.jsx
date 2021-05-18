import React from 'react';
import BreadCrumbs from '../components/content/BreadCrumbs';
import ProductCard from '../components/content/ProductCard';
import Content from '../components/layout/Content';
import Header from '../components/layout/Header';

const SearchResults = () => {
  const Products = [
    {
      id: '1',
      title: 'My title',
      price: {
        currency: 'ARS',
        amount: 4049,
        decimals: 4.049,
      },
      picture: 'https://via.placeholder.com/180',
      condition: 'Good',
      free_shipping: true,
      city: 'City',
    },
    {
      id: '2',
      title: 'My title',
      price: {
        currency: 'ARS',
        amount: 4049,
        decimals: 4.049,
      },
      picture: 'https://via.placeholder.com/180',
      condition: 'Good',
      free_shipping: true,
      city: 'City',
    },
    {
      id: '3',
      title: 'My title',
      price: {
        currency: 'ARS',
        amount: 4049,
        decimals: 4.049,
      },
      picture: 'https://via.placeholder.com/180',
      condition: 'Good',
      free_shipping: true,
      city: 'City',
    },
    {
      id: '4',
      title: 'My title',
      price: {
        currency: 'ARS',
        amount: 4049,
        decimals: 4.049,
      },
      picture: 'https://via.placeholder.com/180',
      condition: 'Good',
      free_shipping: true,
      city: 'City',
    },
  ];

  return (
    <div className="search-results">
      <Header />
      <BreadCrumbs />
      <Content>
        <div className="content">
          {Products.map((product) => (
            <ProductCard
              id={product.id}
              title={product.title}
              picture={product.picture}
              price={product.price.amount}
              city={product.city}
              freeShipping={product.free_shipping}
              key={product.id}
            />
          ))}
        </div>
      </Content>
    </div>
  );
};

export default SearchResults;
