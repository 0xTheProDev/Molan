import React from 'react';

import { ButtonGroup } from './ButtonGroup';

describe('ButtonGroup', () => {
  let
    onChangeStub,
    onResetStub,
    minProps;

  beforeAll(() => {
    onChangeStub = jest.fn();
    onResetStub = jest.fn();

    minProps = {
      lang: 'c',
      code: 'int main(void)',
      onChange: onChangeStub,
      onReset: onResetStub,
    };
  });

  it('should render', () => {
    const wrapper = shallow(<ButtonGroup {...minProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
