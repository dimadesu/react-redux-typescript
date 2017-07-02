import * as React from 'react';
import {shallow} from 'enzyme';
import {Characters} from './Characters';

describe('Characters', () => {
  it('Does not crash', () => {
    expect(shallow(
      <Characters />
    ).length).toEqual(1);
  });
});
