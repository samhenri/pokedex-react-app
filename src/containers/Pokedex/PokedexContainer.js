import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from '../../reducers/pokedex';

import { Pokedex } from '../../app/pokedex/components/Pokedex';

const mapStateToProps = (state) => ({
  count: state.pokedex.count,
  isIncrementing: state.pokedex.isIncrementing,
  isDecrementing: state.pokedex.isDecrementing,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/pokemon/'),
    },
    dispatch,
  );

export const PokedexContainer = connect(mapStateToProps, mapDispatchToProps)(
  Pokedex,
);
