import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pokeball } from '../../../../shared/components/Pokeball';

export class Pokedex extends Component {
  static propTypes = {
    pokedex: PropTypes.array,
    isFetching: PropTypes.bool,
  };

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.info('pokedex loaded');
  }

  renderPokedexList = () => {
    const { pokedex } = this.props;

    pokedex.map((pokemon, i) => {
      return (
        <li key={i}>
          <span>
            {i} - {pokemon.title}
          </span>
        </li>
      );
    });
  };

  render() {
    const { pokedex, isFetching } = this.props;

    console.log(pokedex.length, isFetching);

    return (
      <div>
        <h1>Pokedex</h1>
        <span>{pokedex.length}</span>
        <Pokeball />
      </div>
    );
  }
}
