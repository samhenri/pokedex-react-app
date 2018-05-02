import PokemonDataService from '../services/PokemonDataService';
import {
  GET_POKEMON_SUCCESS,
  GET_POKEMON_REQUEST,
  GET_POKEMON_ERROR,
  GET_POKEMON_SPECIES_SUCCESS,
  GET_POKEMON_SPECIES_REQUEST,
  GET_POKEMON_SPECIES_ERROR,
  GET_EVOLUTION_CHAIN_SUCCESS,
  GET_EVOLUTION_CHAIN_REQUEST,
  GET_EVOLUTION_CHAIN_ERROR,
} from '../constants/actionTypes';

export function getPokemonRequest() {
  return {
    type: GET_POKEMON_REQUEST,
  };
}

export function getPokemonSuccess(pokemon) {
  return {
    type: GET_POKEMON_SUCCESS,
    pokemon,
  };
}

export function getPokemonError(error) {
  return {
    type: GET_POKEMON_ERROR,
    error,
  };
}

export function getPokemon(id) {
  return (dispatch) => {
    dispatch(getPokemonRequest());
    return PokemonDataService.getPokemon(id)
      .then((resp) => dispatch(getPokemonSuccess(resp.data.results)))
      .catch((error) => dispatch(getPokemonError(error)));
  };
}

export function getPokemonSpeciesRequest() {
  return {
    type: GET_POKEMON_SPECIES_REQUEST,
  };
}

export function getPokemonSpeciesSuccess(species) {
  return {
    type: GET_POKEMON_SPECIES_SUCCESS,
    species,
  };
}

export function getPokemonSpeciesError(error) {
  return {
    type: GET_POKEMON_SPECIES_ERROR,
    error,
  };
}

export function getPokemonSpeciesSpecies(id) {
  return (dispatch) => {
    dispatch(getPokemonSpeciesRequest());
    return PokemonDataService.getPokemonSpecies(id)
      .then((resp) => dispatch(getPokemonSpeciesSuccess(resp.data.results)))
      .catch((error) => dispatch(getPokemonSpeciesError(error)));
  };
}

export function getEvolutionChainRequest() {
  return {
    type: GET_EVOLUTION_CHAIN_REQUEST,
  };
}

export function getEvolutionChainSuccess(evolution) {
  return {
    type: GET_EVOLUTION_CHAIN_SUCCESS,
    evolution,
  };
}

export function getEvolutionChainError(error) {
  return {
    type: GET_EVOLUTION_CHAIN_ERROR,
    error,
  };
}

export function getEvolutionChainSpecies(id) {
  return (dispatch) => {
    dispatch(getEvolutionChainRequest());
    return PokemonDataService.getEvolutionChain(id)
      .then((resp) => dispatch(getEvolutionChainSuccess(resp.data.results)))
      .catch((error) => dispatch(getEvolutionChainError(error)));
  };
}
