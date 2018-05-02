import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Pokeball } from '../../../../shared/components/Pokeball';
import { PokedexListItem } from '../PokedexListItem';
import { SearchInput } from '../SearchInput';
import './Pokedex.scss';

const CN = 'pokedex';

const WAIT_INTERVAL = 500;

export class Pokedex extends Component {
  static propTypes = {
    className: PropTypes.string,
    filterPokedex: PropTypes.func,
    isFetching: PropTypes.bool,
    pokedex: PropTypes.array,
    visible: PropTypes.array,
  };

  constructor(props) {
    super(props);

    this.state = {
      pokedex: '',
      visible: [],
    };

    this.onPokemonSearch = this.onPokemonSearch.bind(this);
  }

  componentDidMount() {
    this._timeoutId = null;
  }

  componentDidUpdate() {
    const { pokedex, visible } = this.props;
    if (pokedex && pokedex.length !== this.state.pokedex.length) {
      this.updatePokedex();
    }
    if (visible && visible.length !== this.state.visible.length) {
      this.updateVisible();
    }
  }

  clearInputTimeout(timeoutId) {
    if (!timeoutId) return;

    clearTimeout(timeoutId);

    this._timeoutId = null;
  }

  updateVisible() {
    this.setState({
      visible: this.props.visible,
    });
  }

  updatePokedex() {
    this.setState({
      pokedex: this.props.pokedex,
    });
  }

  onPokemonSearch(e) {
    e.persist();
    this.clearInputTimeout(this._timeoutId);

    this._timeoutId = setTimeout(() => {
      this.props.filterPokedex(e.target.value);
    }, WAIT_INTERVAL);
  }

  renderPokedexList = () => {
    const { pokedex, visible } = this.state;

    const pokedexListClassName = classNames(`${CN}__list`);

    let pokedexList = pokedex;

    if (visible.length) {
      pokedexList = visible;
    }

    return (
      <ul className={pokedexListClassName}>
        {pokedexList.map((pokemon, i) => {
          const dexNum = pokemon.url.split('/').slice(-2)[0];
          return (
            <PokedexListItem key={i} name={pokemon.name} number={dexNum} />
          );
        })}
      </ul>
    );
  };

  render() {
    const { className, isFetching } = this.props;
    const { pokedex } = this.state;

    const pokedexWrapperClassName = classNames(`${CN}__wrapper`, className);
    const pokedexClassName = classNames(`${CN}__main`);

    return (
      <div className={pokedexWrapperClassName}>
        <div className={pokedexClassName}>
          <SearchInput onInput={this.onPokemonSearch} />
          {!isFetching && pokedex && this.renderPokedexList()}
        </div>
        {isFetching && <Pokeball />}
      </div>
    );
  }
}
