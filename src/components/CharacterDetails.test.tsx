import * as React from 'react';
import {shallow} from 'enzyme';
import {CharacterDetails} from './CharacterDetails';

const props = {
  id: 'A',
  name: 'A',
  gender: 'A',
  users: [],
  loginAsUser(){}
};

describe('CharacterDetails', () => {
  it('Does not crash', () => {
    expect(shallow(
      <CharacterDetails {...props} />
    ).length).toEqual(1);
  });
});