import {
  GET_POKEMON_SUCCESS,
  GET_EVOLUTION_CHAIN_SUCCESS,
  GET_POKEMONSPECIES_SUCCESS,
} from '../constants/actionTypes';

export function pokemon(state = [], action) {
  switch (action.type) {
    case GET_POKEMON_SUCCESS:
      return action.pokemon;
    default:
      return state;
  }
}

export function pokemonSpecies(state = [], action) {
  switch (action.type) {
    case GET_POKEMONSPECIES_SUCCESS:
      return action.species;
    default:
      return state;
  }
}

export function evolutionChain(state = [], action) {
  switch (action.type) {
    case GET_EVOLUTION_CHAIN_SUCCESS:
      return action.evolution;
    default:
      return state;
  }
}
