import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Arrow } from './Arrow';

import './ArtworkCarousel.scss';

const CN = 'pokemon__artworks';

export class ArtworkCarousel extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);

    this.state = {
      currentArtwork: 0,
    };
  }

  previousSlide() {
    const { children } = this.props;
    const artworks = React.Children.count(children);
    const lastIndex = artworks - 1;
    const { currentArtwork } = this.state;
    const shouldResetIndex = currentArtwork === 0;
    const index = shouldResetIndex ? lastIndex : currentArtwork - 1;

    this.setState({
      currentArtwork: index,
    });
  }

  nextSlide() {
    const { children } = this.props;
    const lastIndex = React.Children.count(children);
    const { currentArtwork } = this.state;
    const shouldResetIndex = currentArtwork === lastIndex - 1;
    const index = shouldResetIndex ? 0 : currentArtwork + 1;

    this.setState({
      currentArtwork: index,
    });
  }

  render() {
    const { className, children } = this.props;
    const { currentArtwork } = this.state;

    const artworks = React.Children.count(children);

    const carouselClassName = classNames(CN, className);

    return (
      <div className={carouselClassName}>
        {artworks > 1 && (
          <Arrow direction="left" onClick={this.previousSlide} />
        )}
        {React.Children.toArray(children)[currentArtwork]}
        {artworks > 1 && <Arrow direction="right" onClick={this.nextSlide} />}
      </div>
    );
  }
}
