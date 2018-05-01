import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Pokeball.scss';

const CN = 'pokeball';

export class Pokeball extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { className } = this.props;

    const containerClassName = classNames(`${CN}__wrapper`, className);

    return (
      <div className={containerClassName}>
        <div className={CN} />
      </div>
    );
  }
}
