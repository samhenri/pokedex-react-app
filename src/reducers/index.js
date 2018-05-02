import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import pokedex from './pokedex';
import fetchPokedexError from './fetchPokedexError';
import isFetchingPokedex from './isFetchingPokedex';
import filtered from './filterPokedex';

export default combineReducers({
  router: routerReducer,
  pokedex,
  visible: filtered,
  isFetchingPokedex,
  fetchPokedexError,
});
