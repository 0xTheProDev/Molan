import React from 'react';

import { EditorContainer } from './EditorContainer';

describe('Editor Container', () => {
  let
    onDarkStub,
    onSubmitStub,
    minProps;

  beforeAll(() => {
    onDarkStub = jest.fn();
    onSubmitStub = jest.fn();

    minProps = {
      onDark: onDarkStub,
      onSubmit: onSubmitStub,
    };
  });

  it('should render', () => {
    const wrapper = shallow(<EditorContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
