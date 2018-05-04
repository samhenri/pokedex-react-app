import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Pokeball } from '../../../../shared/components/Pokeball';
import { PokemonHeader } from '../PokemonHeader';
import { Type } from '../Type';
import { Artwork } from '../Artwork';
import { ArtworkCarousel } from '../ArtworkCarousel';
import {
  names,
  forms,
  alola,
  megaevolutions,
} from '../../../../constants/pokemonForms';

import './Pokemon.scss';

const CN = 'pokemon';

export class Pokemon extends Component {
  static propTypes = {
    className: PropTypes.string,
    isFetching: PropTypes.bool,
    getPokemon: PropTypes.func,
    match: PropTypes.object,
    pokemon: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      match: { params },
      getPokemon,
    } = this.props;

    getPokemon(params.pokemon);
  }

  removeLoading() {
    this.setState({
      isFetching: false,
    });
  }

  renderLoaded() {
    const { pokemon, match } = this.props;
    const {
      name,
      color,
      habitat,
      types,
      flavor_text_entries,
      stats,
      weight,
      height,
    } = pokemon;

    const pokemonClassName = classNames(
      `${CN}__main`,
      'pokemon',
      habitat && `pokemon--from-${habitat.name}`,
    );

    const dexEntry = flavor_text_entries.find(
      (entry) => entry.language.name === 'en',
    );

    const statsClassName = classNames(
      `${CN}__stats`,
      `${CN}__stats--is-${color.name}`,
    );

    const number = match.params.pokemon;

    const pokemonStats = stats.map((st) => ({
      [st.stat.name]: st.base_stat,
    }));

    const mappedStats = Object.assign({}, ...pokemonStats);

    const statBars = Object.keys(mappedStats).map((stat) => {
      let correctedStat = '';
      switch (mappedStats) {
        case 'hp':
          correctedStat = mappedStats[stat] * 100 / 255;
          break;
        case 'attack':
          correctedStat = mappedStats[stat] * 100 / 181;
          break;
        case 'defense':
          correctedStat = mappedStats[stat] * 100 / 230;
          break;
        case 'speed':
          correctedStat = mappedStats[stat] * 100 / 160;
          break;
        case 'special-attack':
          correctedStat = mappedStats[stat] * 100 / 180;
          break;
        case 'special-defense':
          correctedStat = mappedStats[stat] * 100 / 230;
          break;
        default:
          correctedStat = mappedStats[stat] * 100 / 255;
      }

      const progressBar = {
        width: `${correctedStat}%`,
      };

      return (
        <div className={`${CN}__stats-bar`} key={stat}>
          <div className={`${CN}__stats-bar__${stat}`} style={progressBar}>
            {stat} {mappedStats[stat]}
          </div>
        </div>
      );
    });

    let correctedName = name;
    if (number in names) {
      correctedName = names[number];
    }

    return (
      <div className={pokemonClassName}>
        <PokemonHeader name={correctedName} color={color.name} />
        <div className={`${CN}__details`}>
          {this.renderImages(number, name)}
          <div className={`${CN}__types`}>
            {types.reverse().map((t, i) => {
              return <Type key={i} type={t.type.name} />;
            })}
          </div>
          <div className={`${CN}__description`}>“{dexEntry.flavor_text}”</div>
          <div className={`${CN}__description`}>
            Height: {height}cm Weight: {weight}kg
          </div>
          <div className={statsClassName}>Stats</div>
          <div className={`${CN}__stats-details`}>{statBars}</div>
        </div>
      </div>
    );
  }

  renderImages(number, name) {
    let artworkNames = [name];

    if (number in forms) {
      artworkNames = forms[number];
    }

    if (number in alola) {
      artworkNames = alola[number];
    }

    if (number in megaevolutions) {
      artworkNames = megaevolutions[number];
    }

    return (
      <ArtworkCarousel>
        {artworkNames.map((artwork, i) => {
          return <Artwork key={i} artworkName={artworkNames[i]} />;
        })}
      </ArtworkCarousel>
    );
  }

  render() {
    const { className, pokemon, isFetching } = this.props;

    console.log(pokemon);

    const pokemonWrapperClassName = classNames(`${CN}__wrapper`, className);

    return (
      <div className={pokemonWrapperClassName}>
        {isFetching && (
          <div className={`${CN}__loading-shell`}>
            <PokemonHeader name="Pokémon" />
            <Pokeball />
          </div>
        )}
        {!isFetching && this.renderLoaded()}
      </div>
    );
  }
}
