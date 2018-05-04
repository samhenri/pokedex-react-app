import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ARTWORK_URL } from '../../../../constants/pokemonForms';

import './Artwork.scss';

const CN = 'pokemon__artwork';

export class Artwork extends Component {
  static propTypes = {
    className: PropTypes.string,
    artworkName: PropTypes.string,
  };

  render() {
    const { className, artworkName } = this.props;

    const backgroundImage = {
      backgroundImage: `url(${ARTWORK_URL}${artworkName}.jpg)`,
    };

    const carouselClassName = classNames(CN, className);

    return <div className={carouselClassName} style={backgroundImage} />;
  }
}
