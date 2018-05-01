import {
  GET_POKEDEX_SUCCESS,
  GET_POKEDEX_REQUEST,
  GET_POKEDEX_ERROR,
} from '../constants/actionTypes';

export default function isFetchingPokedex(state = false, action) {
  switch (action.type) {
    case GET_POKEDEX_REQUEST:
      return true;
    case GET_POKEDEX_ERROR:
    case GET_POKEDEX_SUCCESS:
      return false;
    default:
      return state;
  }
}
