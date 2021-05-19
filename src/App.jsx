import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import SearchResults from './pages/SearchResults';
import './styles/main.scss';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  const query = useQuery();
  return (
    <div className="meli">
      <Switch>
        <Route exact path="/items">
          <SearchResults search={query.get('search')} />
        </Route>

        <Route exact path="/items/:id">
          <ProductDetail />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
