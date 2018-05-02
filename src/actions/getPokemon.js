import PokemonDataService from '../services/PokemonDataService';
import {
  GET_POKEMON_SUCCESS,
  GET_POKEMON_REQUEST,
  GET_POKEMON_ERROR,
  GET_POKEMONSPECIES_SUCCESS,
  GET_POKEMONSPECIES_REQUEST,
  GET_POKEMONSPECIES_ERROR,
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

export function getPokemonSpeciesRequest() {
  return {
    type: GET_POKEMONSPECIES_REQUEST,
  };
}

export function getPokemonSpeciesSuccess(species) {
  return {
    type: GET_POKEMONSPECIES_SUCCESS,
    species,
  };
}

export function getPokemonSpeciesError(error) {
  return {
    type: GET_POKEMONSPECIES_ERROR,
    error,
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

export function getPokemonOnly(id) {
  return (dispatch) => {
    dispatch(getPokemonRequest());
    return PokemonDataService.getPokemon(id)
      .then((resp) => {
        dispatch(getPokemonSuccess(resp.data));
      })
      .catch((error) => dispatch(getPokemonError(error)));
  };
}

export function getPokemonSpecies(id) {
  return (dispatch) => {
    dispatch(getPokemonSpeciesRequest());
    return PokemonDataService.getPokemonSpecies(id)
      .then((resp) => dispatch(getPokemonSpeciesSuccess(resp.data)))
      .catch((error) => dispatch(getPokemonSpeciesError(error)));
  };
}

export function getEvolutionChain(id) {
  return (dispatch) => {
    dispatch(getEvolutionChainRequest());
    return PokemonDataService.getEvolutionChain(id)
      .then((resp) => dispatch(getEvolutionChainSuccess(resp.data)))
      .catch((error) => dispatch(getEvolutionChainError(error)));
  };
}

// This has to be done in order to get the correct Evolution Chain from the Pokemon
// Otherwise the application will crash and it wouldn't possible to merge all data

export function getPokemon(id) {
  return (dispatch) => {
    dispatch(getPokemonRequest());
    return PokemonDataService.getPokemon(id)
      .then((resp) => {
        const pokemonData = resp.data;
        PokemonDataService.getPokemonSpecies(id)
          .then((resp) => {
            const speciesData = resp.data;
            let evolutionChain = resp.data.evolution_chain.url.split('/');
            evolutionChain = evolutionChain.pop() || evolutionChain.pop();
            const spreadData = { ...pokemonData, ...speciesData };
            PokemonDataService.getEvolutionChain(evolutionChain)
              .then((resp) => {
                const evolutionData = resp.data;
                dispatch(
                  getPokemonSuccess({
                    ...spreadData,
                    ...evolutionData,
                  }),
                );
              })
              .catch((error) => dispatch(getEvolutionChainError(error)));
          })
          .catch((error) => dispatch(getPokemonSpeciesError(error)));
      })
      .catch((error) => dispatch(getPokemonError(error)));
  };
}
