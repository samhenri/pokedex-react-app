import { FILTER_POKEDEX } from '../constants/actionTypes';

export default function filtered(state = [], action) {
  switch (action.type) {
    case FILTER_POKEDEX:
      return action.pokedex;
    default:
      return state;
  }
}
