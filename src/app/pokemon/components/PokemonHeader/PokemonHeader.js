import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './PokemonHeader.scss';

const CN = 'pokemon-header';

export class PokemonHeader extends Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
  };

  render() {
    const { className, color, name } = this.props;

    const headerClassName = classNames(CN, className, `${CN}--is-${color}`);

    return (
      <header className={headerClassName}>
        <Link to={{ pathname: `/` }}>
          <span className="back-button" />
        </Link>
        <h1>{name}</h1>
      </header>
    );
  }
}
