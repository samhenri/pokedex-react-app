import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  getPokemon,
  getPokemonSpecies,
  getEvolutionChian,
} from '../../actions/getPokemon';

import { Pokemon } from '../../app/pokemon/components/Pokemon';

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
    species: state.species,
    evolution: state.evolution,
    isFetching: state.pokemon.length > 0 ? false : true,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getPokemon,
      getPokemonSpecies,
      getEvolutionChian,
    },
    dispatch,
  );

export const PokemonContainer = connect(mapStateToProps, mapDispatchToProps)(
  Pokemon,
);
