import * as React from 'react';
import {shallow} from 'enzyme';
import {Character} from './Character';

describe('Character', () => {
  it('Does not crash', () => {
    expect(shallow(
      <Character />
    ).length).toEqual(1);
  });
});
