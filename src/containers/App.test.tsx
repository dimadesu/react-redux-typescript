import * as React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

const character = {
  id: 'A',
  name: 'A',
  gender: 'A'
};

const minimalProps = {
  characterDetails: character,
  characters: [character],
  dispatch: () => ({})
};

describe('App', () => {
  it('Does not crash', () => {
      expect(shallow(<App {...minimalProps}/>).length).toBe(1);
  });

  it('Loads characters on mount');
});
