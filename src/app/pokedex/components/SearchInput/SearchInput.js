import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './SearchInput.scss';

const CN = 'pokemon-search';

export class SearchInput extends Component {
  static propTypes = {
    className: PropTypes.string,
    onInput: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      pokemon: '',
      dirty: false,
    };
  }

  handleInputChange = (e) => {
    this.setState({ pokemon: e.target.value });
  };

  handleBlur = () => {
    this.setState({
      touched: true,
    });
  };

  onInputHandler() {
    const { onInput } = this.props;

    onInput && onInput(event);
  }

  render() {
    const { className } = this.props;

    const { dirty } = this.state;

    const searchInputWrapperClassName = classNames(CN, className);
    const searchInputClassName = classNames(`${CN}__input`, dirty && `${CN}__input--is-dirty`);

    return (
      <div className={searchInputWrapperClassName}>
        <input
          className={searchInputClassName}
          onBlur={this.handleBlur}
          onChange={this.handleInputChange}
          onInput={this.onInputHandler}
          placeholder="Search"
          type="text"
        />
      </div>
    );
  }
}
