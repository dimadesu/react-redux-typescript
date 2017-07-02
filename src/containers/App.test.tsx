import * as React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

const minimalProps = {
  characters: [{
    name: 'A',
    gender: 'A'
  }],
  dispatch: () => ({})
};

describe('App', () => {
  it('Does not crash', () => {
      expect(shallow(<App {...minimalProps}/>).length).toBe(1);
  });

  it('Loads characters on mount');
});
