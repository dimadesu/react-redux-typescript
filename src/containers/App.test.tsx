import * as React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
  it('Does not crash', () => {
      expect(shallow(<App/>).length).toBe(1);
  });
});
