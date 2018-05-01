import request from 'axios';

const ROOT_URL = 'https://pokeapi.co/api/v2';

const API_ENDPOINTS = {
  POKEMON: 'pokemon',
  SPECIES: 'pokemon_species',
  EVOLUTION_CHAIN: 'evolution-chain',
};

const POKEDEX_LIMIT = '?limit=802'; // Known Pokémon on the API, other entities are different forms

const PokemonDataService = {
  getFullPokedex: () => {
    return request.get(`${ROOT_URL}/${API_ENDPOINTS.POKEMON}/${POKEDEX_LIMIT}`);
  },
  getPokemon: (pokedexEntry) => {
    return request.get(`${ROOT_URL}/${API_ENDPOINTS.POKEMON}/${pokedexEntry}`);
  },
  getPokemonSpecies: (pokedexEntry) => {
    return request.get(`${ROOT_URL}/${API_ENDPOINTS.SPECIES}/${pokedexEntry}`);
  },
  getEvolutionChain: (pokedexEntry) => {
    return request.get(
      `${ROOT_URL}/${API_ENDPOINTS.EVOLUTION_CHAIN}/${pokedexEntry}`,
    );
  },
};

export default PokemonDataService;
