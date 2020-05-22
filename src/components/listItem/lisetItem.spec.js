import React from 'react';
import {shallow} from 'enzyme';
import {checkProps, findByTestAttr} from '../../../Utils';
import ListItem from './index';

describe('ListItem Component', () => {
  describe('Checking PropTypes', () => {
    it('should not through a warning', () => {
      const expectedProps = {
        title: 'Example Title',
        desc: 'Some text'
      }
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Example Title',
        desc: 'Some text'
      }
      wrapper = shallow(<ListItem {...props} />);
    });

    it('should render without error', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    });

    it('should render a title', () => {
      const title = findByTestAttr(wrapper, 'componentTitle');
      expect(title.length).toBe(1);
    });

    it('should render a description', () => {
      const desc = findByTestAttr(wrapper, 'componentDesc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Component is not rendered', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: 'Some text'
      }
      wrapper = shallow(<ListItem {...props} />);
    });

    it('should not render', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(0);
    });
  });
});