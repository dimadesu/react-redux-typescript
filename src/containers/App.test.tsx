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
  users: [
    {
      id: 1,
      name: 'User 1',
      color: 'red',
    },
    {
      id: 2,
      name: 'User 2',
      color: 'blue',
    }
  ],
  dispatch: () => ({})
};

describe('App', () => {
  it('Does not crash', () => {
      expect(shallow(<App {...minimalProps}/>).length).toBe(1);
  });

  it('Loads characters on mount');
});
