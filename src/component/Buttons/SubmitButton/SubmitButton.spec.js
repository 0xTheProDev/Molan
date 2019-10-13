import React from 'react';
import { Button } from 'semantic-ui-react';

import { SubmitButton } from './SubmitButton';

describe('Component::Buttons:SubmitButton::SubmitButton', () => {
  let
    onSubmitButtonClickStub,
    minProps;

  beforeAll(() => {
    onSubmitButtonClickStub = jest.fn();

    minProps = {
      SubmitButtonText: 'Submit',
      onSubmitButtonClick: onSubmitButtonClickStub,
    };
  });

  it('should render with base structure', () => {
    const wrapper = shallow(<SubmitButton {...minProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke callback when Button clicked', () => {
    const wrapper = shallow(<SubmitButton {...minProps} />);

    wrapper.find(Button).simulate('click');

    expect(onSubmitButtonClickStub).toHaveBeenCalled();
  });
});
