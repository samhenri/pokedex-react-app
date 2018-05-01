import { GET_POKEDEX_SUCCESS } from '../constants/actionTypes';

export default function pokedex(state = [], action) {
  switch (action.type) {
    case GET_POKEDEX_SUCCESS:
      return action.pokedex;
    default:
      return state;
  }
}
