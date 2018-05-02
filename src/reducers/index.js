import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import pokedex from './pokedex';
import fetchPokedexError from './fetchPokedexError';
import {
  fetchPokemonError,
  fetchPokemonSpeciesError,
  fetchEvolutionChainError,
} from './fetchPokemonError';
import {
  isFetchingPokemon,
  isFetchingPokemonSpecies,
  isFetchingEvolutionChain,
} from './isFetchingPokemon';
import isFetchingPokedex from './isFetchingPokedex';
import filtered from './filterPokedex';

export default combineReducers({
  router: routerReducer,
  pokedex,
  visible: filtered,
  isFetchingPokedex,
  isFetchingPokemon,
  isFetchingPokemonSpecies,
  isFetchingEvolutionChain,
  fetchPokedexError,
  fetchPokemonError,
  fetchPokemonSpeciesError,
  fetchEvolutionChainError,
});
