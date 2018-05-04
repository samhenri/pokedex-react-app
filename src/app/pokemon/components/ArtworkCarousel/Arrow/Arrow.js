import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Arrow.scss';

const CN = 'arrow';

export class Arrow extends Component {
  static propTypes = {
    className: PropTypes.string,
    direction: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      currentArtwork: 0,
    };
  }

  render() {
    const { className, direction, onClick } = this.props;

    const arrowClassName = classNames(
      CN,
      direction === 'right' && `${CN}--to-right`,
      direction === 'left' && `${CN}--to-left`,
      className,
    );

    return <div className={arrowClassName} onClick={onClick} />;
  }
}
