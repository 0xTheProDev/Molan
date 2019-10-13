import React from 'react';
import { TextArea } from 'semantic-ui-react';

import { CustomInput } from './CustomInput';

describe('Component::CustomInput::CustomInput', () => {
  it('should render with base structure', () => {
    const wrapper = shallow(<CustomInput theme='light' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke onChangeHandler when Input changes', () => {
    const onCustomInputChangeStub = jest.fn();

    const wrapper = shallow(<CustomInput theme='light' onCustomInputChange={onCustomInputChangeStub} />);
    wrapper
      .find(TextArea)
      .simulate('change');

    expect(onCustomInputChangeStub).toHaveBeenCalled();
  });
});
