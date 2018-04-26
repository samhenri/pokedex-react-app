import React from 'react';
import { shallow } from 'enzyme';
import { Pokemon } from '../Pokemon';

describe('<Pokemon /> component', () => {
  it('should render Bulbasaur type', () => {
    const component = shallow(
      <Pokemon id="1" name="bulbasaur" type="grass" height="0.7" weight="6.9" />,
    );
    expect(component).toMatchSnapshot();
  });
});
