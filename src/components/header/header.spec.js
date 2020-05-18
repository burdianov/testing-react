import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';
import {findByTestAttr} from '../../../Utils';

const setUp = (props = {}) => {
  return shallow(<Header {...props} />);
};

describe('Header component', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('should render a logo', () => {
    const wrapper = findByTestAttr(component,'logoIMG');
    expect(wrapper.length).toBe(1);
  });
});