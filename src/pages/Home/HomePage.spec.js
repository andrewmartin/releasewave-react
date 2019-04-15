import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';
import { FullLoading } from 'components/Loader';

import { default as store } from '../../store/__mocks__/fixtures';

describe('HomePage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomePage release={store.release} />);
  });

  it('should render', () => {
    expect(wrapper.getElement()).toBeDefined();
  });

  describe('when loading', () => {
    beforeEach(() => {
      wrapper.setProps({
        release: {
          ...store.release,
          isLoading: true,
        },
      });
    });

    it('should return loading', () => {
      expect(wrapper.contains(<FullLoading />)).toEqual(true);
    });
  });
});
