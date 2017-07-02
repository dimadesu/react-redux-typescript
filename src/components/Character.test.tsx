import * as React from 'react';
import {shallow} from 'enzyme';
import {Character} from './Character';

const props = {
  name: 'A',
  gender: 'A',
};

describe('Character', () => {
  it('Does not crash', () => {
    expect(shallow(
      <Character {...props} />
    ).length).toEqual(1);
  });
});
