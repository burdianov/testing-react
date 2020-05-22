import React from 'react';
import {checkProps, findByTestAttr} from '../../../Utils';
import SharedButton from './index';
import {shallow} from 'enzyme';

describe('SharedButton Component', () => {
  describe('Checking PropTypes', () => {
    it('should not through a warning', () => {
      const expectedProps = {
        buttonText: 'Example Button Text',
        emitEvent: () => {

        }
      };
      const propError = checkProps(SharedButton, expectedProps);
      expect(propError).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: 'Example Button Text',
        emitEvent: () => {

        }
      };
      wrapper = shallow(<SharedButton {...props} />)
    });

    it('should render a button', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });
  });
});