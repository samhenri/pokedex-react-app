import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Pokeball } from '../../../../shared/components/Pokeball';
import { PokedexListItem } from '../PokedexListItem';
import './Pokedex.scss';

const CN = 'pokedex';

export class Pokedex extends Component {
  static propTypes = {
    className: PropTypes.string,
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

    const pokedexListClassName = classNames(`${CN}__list`);

    return (
      <ul className={pokedexListClassName}>
        {pokedex.map((pokemon, i) => {
          return <PokedexListItem key={i} name={pokemon.name} number={i + 1} />;
        })}
      </ul>
    );
  };

  render() {
    const { className, pokedex, isFetching } = this.props;

    console.log(pokedex.length, isFetching);

    const pokedexWrapperClassName = classNames(`${CN}__wrapper`, className);
    const pokedexClassName = classNames(`${CN}__main`);

    return (
      <div className={pokedexWrapperClassName}>
        <div className={pokedexClassName}>
          {!isFetching && this.renderPokedexList()}
        </div>
        {isFetching && <Pokeball />}
      </div>
    );
  }
}
