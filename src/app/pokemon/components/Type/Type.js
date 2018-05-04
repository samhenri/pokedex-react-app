import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Type.scss';

const CN = 'pokemon-type';

export class Type extends Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
  };

  render() {
    const { type, className } = this.props;

    const typeClass = classNames(CN, `${CN}--is-${type}`, className);

    return <span className={typeClass}>{type}</span>;
  }
}
