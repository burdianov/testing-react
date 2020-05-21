import React from 'react';
import {shallow} from 'enzyme';
import Headline from './index';

import {findByTestAttr, checkProps} from '../../../Utils';

const setUp = (props = {}) => {
  return shallow(<Headline {...props} />);
}

describe('Headline component', () => {
  describe('Checking PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        header: 'Test Header',
        desc: 'Test Desc',
        tempArray: [{
          firstName: 'Test firstName',
          lastName: 'Test lastName',
          email: 'Email',
          age: 24,
          onlineStatus: false
        }]
      };
      const propsErr = checkProps(Headline, expectedProps,);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Have props', () => {
    let component;

    beforeEach(() => {
      const props = {
        header: 'Test header',
        desc: 'Test desc'
      };
      component = setUp(props);
    });

    it('should render without errors', () => {
      const wrapper = findByTestAttr(component, 'HeadlineComponent');
      expect(wrapper.length).toBe(1);
    });

    it('should render a h1', () => {
      const h1 = findByTestAttr(component, 'header');
      expect(h1.length).toBe(1);
    });

    it('should render a description', () => {
      const desc = findByTestAttr(component, 'desc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Have no props', () => {
    let component;

    beforeEach(() => {
      component = setUp();
    })

    it('should not render', () => {
      const wrapper = findByTestAttr(component, 'HeadlineComponent');
      expect(wrapper.length).toBe(0);
    });
  });
});
