import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { names } from '../../../../constants/pokemonForms';

import './PokedexListItem.scss';

const CN = 'pokedex__list__item';

export class PokedexListItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { className, name, number } = this.props;

    let correctedName = name;

    if (number in names) {
      correctedName = names[number];
    }

    const listItemWrapperClassName = classNames(CN, className);
    const pokemonSpriteWrapperClassName = classNames(`${CN}__sprite`);
    const pokemonSpriteClassName = classNames('pki', `n${number}`);

    const pokemonInfoWrapperClassName = classNames(`${CN}__pokemon`);
    const dexnumClassName = classNames(`${CN}__dexnum`);
    const pokemonClassName = classNames(`${CN}__name`);

    const dex = number.padStart(3, '0');

    return (
      <li className={listItemWrapperClassName}>
        <Link to={{ pathname: `/pokemon/${number}` }}>
          <div className={pokemonSpriteWrapperClassName}>
            <span className={pokemonSpriteClassName} />
          </div>
          <div className={pokemonInfoWrapperClassName}>
            <span className={dexnumClassName}>{dex}</span>
            <span className={pokemonClassName}>{correctedName}</span>
          </div>
        </Link>
      </li>
    );
  }
}
