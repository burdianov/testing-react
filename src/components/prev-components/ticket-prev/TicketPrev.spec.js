import React from 'react';
import {shallow} from 'enzyme';
import TicketPrev from './TicketPrev';

it.skip('should increment the total when clicking the button', () => {
  const wrapper = shallow(<TicketPrev />);
  const totalBefore = wrapper.find('h2.total').text();

  expect(totalBefore).toBe('0');

  const button = wrapper.find('button');
  button.simulate('click');
  button.simulate('click');

  const totalAfter = wrapper.find('h2.total').text();
  expect(totalAfter).toBe('2');
});

it.skip('should render ticket-prev name in title', () => {
  const wrapper = shallow(<TicketPrev name={'NHL Tickets'} />);
  const text = wrapper.find('h2.title').text();

  expect(text).toBe('NHL Tickets');
});