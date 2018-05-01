import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Type.scss';

export class Type extends Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
  };

  render() {
    const { type, className } = this.props;

    const typeClass = classNames(
      'pokemon-type',
      `pokemon-type--${type}`,
      className,
    );

    return <span className={typeClass}>{type}</span>;
  }
}
