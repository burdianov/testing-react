import React from 'react';
import {shallow} from 'enzyme';
import FooterPrev from './FooterPrev';

it.skip('should render customer service phone number', () => {
  const wrapper = shallow(<FooterPrev />);
  const span = wrapper.find('span');
  const result = span.text();

  expect(result).toBe('Customer Service: 1-800-555-444');
});