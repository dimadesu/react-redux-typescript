import * as React from 'react';
import {shallow} from 'enzyme';
import {CharacterDetails} from './CharacterDetails';

const props = {
  name: 'A',
  gender: 'A',
};

describe('CharacterDetails', () => {
  it('Does not crash', () => {
    expect(shallow(
      <CharacterDetails {...props} />
    ).length).toEqual(1);
  });
});
