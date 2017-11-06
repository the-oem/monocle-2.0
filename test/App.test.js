import React from 'react';
import App from '../lib/components/App/App';
import { shallow, mount } from 'enzyme';

describe('App tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
});
