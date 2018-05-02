import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getPokemon } from '../../actions/getPokemon';

import { Pokemon } from '../../app/pokemon/components/Pokemon';

const mapStateToProps = (state) => {
  return {
    //pokemon: { ...state.pokemon, ...state.species, ...state.evolution },
    pokemon: state.pokemon,
    isFetching: Object.keys(state.pokemon).length === 0 ? true : false,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getPokemon,
    },
    dispatch,
  );

export const PokemonContainer = connect(mapStateToProps, mapDispatchToProps)(
  Pokemon,
);
