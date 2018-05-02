import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Pokemon.scss';

const CN = 'pokemon';

export class Pokemon extends Component {
  static propTypes = {
    className: PropTypes.string,
    isFetching: PropTypes.bool,
    getPokemon: PropTypes.func,
    match: PropTypes.object,
    pokemon: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      match: { params },
      getPokemon,
    } = this.props;

    getPokemon(params.pokemon);
  }

  componentDidUpdate() {
    // const { pokemon } = this.props;
    // if (Object.keys(pokemon).length !== 0 && pokemon.constructor === Object) {
    //   this.removeLoading();
    // }
  }

  removeLoading() {
    this.setState({
      isFetching: false,
    });
  }

  render() {
    const { className, pokemon, isFetching } = this.props;

    console.log(pokemon);

    const pokemonWrapperClassName = classNames(`${CN}__wrapper`, className);
    const pokemonClassName = classNames(`${CN}__main`);

    return (
      <div className={pokemonWrapperClassName}>
        <div className={pokemonClassName}>
          Pokemon: <br />
          evolution <br />
          species:
        </div>
        {isFetching && 'Loading... '}
      </div>
    );
  }
}
