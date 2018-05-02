import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './PokemonStats.scss';

export class PokemonStats extends Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.number,
    height: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    weight: PropTypes.number,
  };

  render() {
    const { id, height, weight, name, type, className } = this.props;

    const pokemonClassName = classNames('pokemon', className);

    return (
      <div className={pokemonClassName}>
        Dex entry: {id} <br />
        Name: {name} <br />
        Type: {type} <br />
        Height: {height} <br />
        Weight: {weight} <br />
      </div>
    );
  }
}
