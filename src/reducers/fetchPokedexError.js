import { GET_POKEDEX_ERROR } from '../constants/actionTypes';

export default function fetchPokedexError(state = [], action) {
  switch (action.type) {
    case GET_POKEDEX_ERROR:
      return action.error;
    default:
      return state;
  }
}
