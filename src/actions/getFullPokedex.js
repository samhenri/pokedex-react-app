import PokemonDataService from '../services/PokemonDataService';
import {
  GET_POKEDEX_SUCCESS,
  GET_POKEDEX_REQUEST,
  GET_POKEDEX_ERROR,
} from '../constants/actionTypes';

export function getPokedexRequest() {
  return {
    type: GET_POKEDEX_REQUEST,
  };
}

export function getPokedexSuccess(pokedex) {
  return {
    type: GET_POKEDEX_SUCCESS,
    pokedex,
  };
}

export function getPokedexError(error) {
  return {
    type: GET_POKEDEX_ERROR,
    error,
  };
}

export function getPokedex() {
  return (dispatch) => {
    dispatch(getPokedexRequest());
    return PokemonDataService.getFullPokedex()
      .then((resp) => dispatch(getPokedexSuccess(resp.data.results)))
      .catch((error) => dispatch(getPokedexError(error)));
  };
}
