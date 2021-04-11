

import React from 'react';
import { shallow } from 'enzyme';
import CellItem from "./CellItem";


describe('<CellItem/>', () => {
  const props = {
    data: {Year:'2013', Poster:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'},
    onPress: jest.fn
  };

  const wrapper = shallow(<CellItem {...props} />);

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without blowing up', () => {
    expect(wrapper.length).toEqual(1);
  });
});
