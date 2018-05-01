import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Pokedex extends Component {
  static propTypes = {
    count: PropTypes.number,
    changePage: PropTypes.func,
    decrement: PropTypes.func,
    decrementAsync: PropTypes.func,
    increment: PropTypes.func,
    incrementAsync: PropTypes.func,
    isIncrementing: PropTypes.bool,
    isDecrementing: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      isIncrementing: false,
      isDecrementing: false,
    };
  }

  render() {
    const {
      count,
      changePage,
      decrement,
      decrementAsync,
      increment,
      incrementAsync,
      isIncrementing,
      isDecrementing,
    } = this.props;

    return (
      <div>
        <h1>Home</h1>
        <p>Count: {count}</p>

        <p>
          <button onClick={increment} disabled={isIncrementing}>
            Increment
          </button>
          <button onClick={incrementAsync} disabled={isIncrementing}>
            Increment Async
          </button>
        </p>

        <p>
          <button onClick={decrement} disabled={isDecrementing}>
            Decrementing
          </button>
          <button onClick={decrementAsync} disabled={isDecrementing}>
            Decrement Async
          </button>
        </p>

        <p>
          <button onClick={changePage}>Go to about page via redux</button>
        </p>
      </div>
    );
  }
}
