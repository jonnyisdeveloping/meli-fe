import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import SearchResults from './pages/SearchResults';
import './styles/main.scss';

function App() {
  return (
    <div className="meli">
      <Switch>
        <Route exact path="/items">
          <SearchResults />
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
