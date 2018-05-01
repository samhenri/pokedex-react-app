import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import { Route } from 'react-router-dom';
import { PokedexContainer } from './containers/Pokedex';
import Pokemon from './containers/Pokemon';
import { getPokedex } from './actions/getFullPokedex';

import 'sanitize.css/sanitize.css';
import './index.css';

const target = document.querySelector('#root');

// Dispatch action on first load
store.dispatch(getPokedex());

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <main>
          <Route exact path="/" component={PokedexContainer} />
          <Route path="/pokemon/:pokemon" component={Pokemon} />
        </main>
      </div>
    </ConnectedRouter>
  </Provider>,
  target,
);
