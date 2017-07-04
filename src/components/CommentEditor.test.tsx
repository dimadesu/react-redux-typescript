import * as React from 'react';
import {shallow, mount} from 'enzyme';
import {CommentEditor} from './CommentEditor';

describe('CommentEditor', () => {
  const props = {
    onCommentSubmit: () => {}
  };

  it('Does not crash', () => {
    expect(shallow(
      <CommentEditor {...props} />
    ).length).toEqual(1);
  });

  it('Does not call onCommentSubmit on Enter with no text', () => {
    const mockCallback = jest.fn();

    mount(
      <CommentEditor
        onCommentSubmit={() => mockCallback()}
      />
    ).find('input').simulate('keyDown', {which: 13});

    expect(mockCallback.mock.calls.length).toBe(0);
  });

  it('Calls onCommentSubmit on Enter, when there is a text', () => {
    const mockCallback = jest.fn();

    mount(
      <CommentEditor
        onCommentSubmit={() => mockCallback()}
      />
    ).setState({text: 'hello'}).find('input')
      .simulate('keyDown', {which: 13});

    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
