import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getPokedex } from '../../actions/getFullPokedex';

import { Pokedex } from '../../app/pokedex/components/Pokedex';

const mapStateToProps = (state) => {
  return {
    pokedex: state.pokedex,
    isFetching: state.pokedex.length > 0 ? false : true,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getPokedex }, dispatch);

export const PokedexContainer = connect(mapStateToProps, mapDispatchToProps)(
  Pokedex,
);
