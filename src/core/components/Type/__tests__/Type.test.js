import React from 'react';
import { shallow } from 'enzyme';
import { Type } from '../Type';

describe('<Type /> component', () => {
  it('should render Electric type', () => {
    const component = shallow(<Type type="electric" />);
    expect(component).toMatchSnapshot();
  });
});
