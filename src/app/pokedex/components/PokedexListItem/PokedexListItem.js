import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CN = 'pokedex__list__item';

export class PokedexListItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  };

  render() {
    const { className, name, number } = this.props;

    const listItemWrapperClassName = classNames(CN, className);

    return (
      <li className={listItemWrapperClassName}>
        {number} - {name}
      </li>
    );
  }
}
