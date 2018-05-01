import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import pokedex from './pokedex';
import fetchPokedexError from './fetchPokedexError';
import isFetchingPokedex from './isFetchingPokedex';

export default combineReducers({
  router: routerReducer,
  pokedex,
  counter,
  isFetchingPokedex,
  fetchPokedexError,
});
