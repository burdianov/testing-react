import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import Footer from './components/prev-components/footer-prev/FooterPrev';
import TicketPrev from './components/prev-components/ticket-prev/TicketPrev';

it.skip('should render ticket-prev and FooterPrev', () => {
  const wrapper = shallow(<App />);
  const footer = wrapper.find(Footer);
  const ticket = wrapper.find(TicketPrev);

  expect(footer.exists()).toBe(true);
  expect(ticket.exists()).toBe(true);
});