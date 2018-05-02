import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getPokedex, filterPokedex } from '../../actions/getFullPokedex';

import { Pokedex } from '../../app/pokedex/components/Pokedex';

const mapStateToProps = (state) => {
  return {
    pokedex: state.pokedex,
    visible: state.visible,
    isFetching: state.pokedex.length > 0 ? false : true,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getPokedex,
      filterPokedex,
    },
    dispatch,
  );

export const PokedexContainer = connect(mapStateToProps, mapDispatchToProps)(
  Pokedex,
);
