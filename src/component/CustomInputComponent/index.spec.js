import React from 'react';

import CustomInput from './index';

describe('Component::CustomInput::Integration Suite', () => {
  let
    onCustomInputChangeStub,
    minProps;

  beforeAll(() => {
    onCustomInputChangeStub = jest.fn();

    minProps = {
      theme: 'light',
      onCustomInputChange: onCustomInputChangeStub,
    };
  });

  it('should render with base structure', () => {
    const wrapper = mount(<CustomInput {...minProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke onCustomInputChange callback with new value when text changes', () => {
    const INPUT = 'Test Input';

    const wrapper = mount(<CustomInput {...minProps} />);
    wrapper
      .find('textarea')
      .simulate('change', { target: { value: INPUT }});

    expect(onCustomInputChangeStub).toHaveBeenCalledWith(INPUT);
  });
});
