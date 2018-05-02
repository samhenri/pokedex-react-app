import {
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_ERROR,
  GET_POKEMONSPECIES_REQUEST,
  GET_POKEMONSPECIES_SUCCESS,
  GET_POKEMONSPECIES_ERROR,
  GET_EVOLUTION_CHAIN_REQUEST,
  GET_EVOLUTION_CHAIN_SUCCESS,
  GET_EVOLUTION_CHAIN_ERROR,
} from '../constants/actionTypes';

export function isFetchingPokemon(state = false, action) {
  switch (action.type) {
    case GET_POKEMON_REQUEST:
      return true;
    case GET_POKEMON_ERROR:
    case GET_POKEMON_SUCCESS:
      return false;
    default:
      return state;
  }
}

export function isFetchingPokemonSpecies(state = false, action) {
  switch (action.type) {
    case GET_POKEMONSPECIES_REQUEST:
      return true;
    case GET_POKEMONSPECIES_ERROR:
    case GET_POKEMONSPECIES_SUCCESS:
      return false;
    default:
      return state;
  }
}

export function isFetchingEvolutionChain(state = false, action) {
  switch (action.type) {
    case GET_EVOLUTION_CHAIN_REQUEST:
      return true;
    case GET_EVOLUTION_CHAIN_ERROR:
    case GET_EVOLUTION_CHAIN_SUCCESS:
      return false;
    default:
      return state;
  }
}
