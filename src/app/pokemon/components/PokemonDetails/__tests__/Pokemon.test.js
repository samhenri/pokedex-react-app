import React from 'react';
import { shallow } from 'enzyme';
import { Pokemon } from '../Pokemon';

const mockPokemon = {
  id: 1,
  name: 'Bulbasaur',
  type: 'grass',
  height: 0.7,
  weight: 6.9,
};

describe('<Pokemon /> component', () => {
  it('should render Bulbasaur type', () => {
    const component = shallow(
      <Pokemon
        id={mockPokemon.id}
        name={mockPokemon.name}
        type={mockPokemon.type}
        height={mockPokemon.height}
        weight={mockPokemon.weight}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
