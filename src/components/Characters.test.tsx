import * as React from 'react';
import {shallow} from 'enzyme';
import {Characters} from './Characters';

const props = {
  characters: [{
    name: 'N',
    gender: 'N',
  }],
  onCharacterClick: () => {}
};

describe('Characters', () => {
  it('Does not crash', () => {
    expect(shallow(
      <Characters {...props} />
    ).length).toEqual(1);
  });
});
