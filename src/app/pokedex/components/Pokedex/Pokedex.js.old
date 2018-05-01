import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PokedexListItem } from '../PokedexListItem';

const CN = 'pokedex';

export class Pokedex extends Component {
  static propTypes = {
    className: PropTypes.string,
    pokemon: PropTypes.array.isRequired,
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.pokemon !== this.props.pokemon;
  }

  renderListItems = (list) => {
    const pokedexListClassName = classNames(`${CN}__list`);

    return (
      <ul className={pokedexListClassName} id="pokedex">
        {list.map((pokemon) => {
          const species = pokemon.pokemon_species;

          return (
            <PokedexListItem
              key={pokemon.entry_number}
              name={species.name}
              number={pokemon.entry_number}
            />
          );
        })}
      </ul>
    );
  };

  render() {
    const { className, pokemon } = this.props;

    const pokedexWrapperClassName = classNames(CN, className);

    return <div className={pokedexWrapperClassName}>{this.renderListItems(pokemon)}</div>;
  }
}
