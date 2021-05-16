import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import './styles/main.scss';

function App() {
  return (
    <div className="meli">
      <Switch>
        <Route path="/items">
          <SearchResults />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
