import {
  GET_POKEMON_ERROR,
  GET_EVOLUTION_CHAIN_ERROR,
  GET_POKEMONSPECIES_ERROR,
} from '../constants/actionTypes';

export function fetchPokemonError(state = [], action) {
  switch (action.type) {
    case GET_POKEMON_ERROR:
      return action.error;
    default:
      return state;
  }
}

export function fetchEvolutionChainError(state = [], action) {
  switch (action.type) {
    case GET_EVOLUTION_CHAIN_ERROR:
      return action.error;
    default:
      return state;
  }
}

export function fetchPokemonSpeciesError(state = [], action) {
  switch (action.type) {
    case GET_POKEMONSPECIES_ERROR:
      return action.error;
    default:
      return state;
  }
}
